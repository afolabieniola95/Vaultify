function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// store ONLY user id
function setCurrentUser(user) {
  localStorage.setItem("currentUser", user.id);
}

function getCurrentUser() {
  const id = localStorage.getItem("currentUser");
  return getUsers().find(u => u.id === id);
}

// ===== DOM =====
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const signEmail = document.getElementById('signUp-email');
const signPassword = document.getElementById('create-password');
const signPhone = document.getElementById('signUp-phone');
const signUpBtn = document.getElementById('signUp');
const signupError = document.getElementById('signup-error');
const successBox = document.querySelector('.successfulBox');
const backgroundCover = document.querySelector('.successBox-background');

const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
const nameWrapperContainer = document.querySelector('.name-wrapper-container');
const emailPhoneWrapperContainer = document.querySelector('.emailPhone-wrapper-container');
const passwordWrapperContainer = document.querySelector('.password-wrapper-container');
const profileWrapperContainer = document.querySelector('.profile-wrapper-container');

const filePicker = document.getElementById('file-picker');
const preview = document.getElementById('preview');
const noProfile = document.getElementById('no-profile');
const spinner = document.querySelector('.spinner');
const disabledClick = document.querySelector('.disabled-click');
const uploadSuccess = document.querySelector('.upload-text');

// ===== Utils =====
function showError(el, msg) {
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===== Multi-step form =====
let score = 0;

nextBtn?.addEventListener("click", () => {

  // STEP 0
  if(score === 0){

    if(!firstName.value || !lastName.value){
      return showError(signupError, "Enter first name and last name");
    }
    nameWrapperContainer.style.display = "none";
    emailPhoneWrapperContainer.classList.add("show");

    score++;
    return;
  }

  // STEP 1
  if(score === 1){

    if(!signEmail.value || !signPhone.value){
      return showError(signupError, "Enter email and phone");
    }
   emailPhoneWrapperContainer.classList.remove("show");
    passwordWrapperContainer.classList.add("show");
    
    nextBtn.style.display = "none";
    previousBtn.style.display = "block";
    signUpBtn.style.display = "block";

    score++;
    return;
  }

});


previousBtn?.addEventListener("click", () => {

  // remove password
  if(score === 2){

    passwordWrapperContainer.classList.remove("show");
    emailPhoneWrapperContainer.classList.add("show");
     nextBtn.style.display = "block";
     previousBtn.style.display = "block";
     signUpBtn.style.display = "none";
    score--;
    return;
  }

  // remove email
  if(score === 1){

    emailPhoneWrapperContainer.classList.remove("show");
    nameWrapperContainer.style.display = "flex";
    score--;
  }

});


// ===== Avatar upload =====
preview?.addEventListener('click', () => filePicker.click());

filePicker?.addEventListener('change', () => {
  const file = filePicker.files[0];
  if (!file) return;
  handleFile(file);
});

function handleFile(file) {
  const maxSize = 500 * 1024; // 500KB to avoid localStorage overflow
  if (file.size > maxSize) {
    alert('File is too large. Max 500KB');
    return;
  }

  const reader = new FileReader();

  reader.onload = (e) => {
    spinner.classList.add('show');
    uploadSuccess.classList.add('upload');
    uploadSuccess.textContent = "Uploading...";
    disabledClick.classList.add('disable');

    setTimeout(() => {
      base64 = e.target.result;
      preview.style.backgroundImage = `url(${base64})`;
      noProfile.style.display = "none";
      spinner.classList.remove('show');
      disabledClick.classList.remove('disable');

      uploadSuccess.textContent = "Upload Successfully";
      uploadSuccess.style.color = "green";

      setTimeout(() => {
        uploadSuccess.classList.remove('upload');
        uploadSuccess.textContent = "";
      }, 1500);
    }, 1000);
  };

  reader.readAsDataURL(file);
}

  function createUser(firstName, lastName, phone, password) {
  return {
    id: "usr_" + Date.now(),
    name: firstName + " " + lastName,
    phone,
    password,
    balance: 500
  };
}

// ===== Signup =====
signUpBtn?.addEventListener("click", () => {

  const first = firstName.value.trim();
  const last = lastName.value.trim();
  const phone = signPhone.value.trim();
  const email = signEmail.value.trim();
  const password = signPassword.value.trim();

  if (!first || !last) return showError(signupError, "Enter full name");
  if (!phone) return showError(signupError, "Enter phone");
  if (!email) return showError(signupError, "Enter email");
  if (!password) return showError(signupError, "Enter password");

  let users = getUsers();

  if (users.some(u => u.phone === phone)) {
    return showError(signupError, "Phone already exists");
  }

  const user = createUser(first, last, phone, password);

  users.push(user);
  saveUsers(users);

  setCurrentUser(user);

  signUpBtn.disabled = true;
  signUpBtn.textContent = "Loading...";

  setTimeout(() => {
    window.location.href = "home.html";
  }, 800);
});



// ===== Login =====
const loginPhone = document.getElementById('loginPhone');
const loginPassword = document.getElementById('loginPassword');
const loginBtn = document.getElementById('login');
const loginError = document.getElementById('login-error');
const loginSpinner = document.querySelector('.spinner');

loginBtn?.addEventListener('click', () => {

  const phone = loginPhone.value.trim();
  const password = loginPassword.value.trim();

  if (!phone || !password) {
    return showError(loginError, "Enter phone number and password");
  }

  let users = getUsers();

  const foundUser = users.find(user => user.phone === phone);

  // check user exists
  if (!foundUser) {
    return showError(loginError, "User not found");
  }

  // check password
  if (!foundUser.password){
    return showError(loginError, "Wrong password");
  }

  // success
  setCurrentUser(foundUser);

  loginSpinner?.classList.add('show');
 console.log("LOGIN OK, redirecting...");
 
  setTimeout(() => {
    window.location.href = "home.html";
  }, 500);

});

// ===== Clear errors on input =====
[firstName, lastName, signEmail, signPhone, signPassword].forEach(input => {
  input?.addEventListener('input', () => signupError.textContent = "");
});

// ===== Password strength =====
function checkStrength(password, bar, text) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (password.length === 0) {
    bar.style.width = "0%";
    text.textContent = "";
    return;
  }
  if (password.length > 30) {
    text.textContent = "Too long password";
    text.style.color = "red";
    return;
  }

  if (score <= 1) {
    bar.style.width = "25%";
    bar.style.background = "red";
    text.style.color = "red";
    text.textContent = "Weak";
  } else if (score === 2) {
    bar.style.width = "50%";
    bar.style.background = "orange";
    text.style.color = "orange";
    text.textContent = "Fair";
  } else if (score === 3) {
    bar.style.width = "75%";
    bar.style.background = "blue";
    text.style.color = "blue";
    text.textContent = "Good";
  } else {
    bar.style.width = "100%";
    bar.style.background = "green";
    text.style.color = "green";
    text.textContent = "Strong";
  }
}

// Signup password strength
const strengthContainer = document.querySelector('.strength-container');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');

signPassword?.addEventListener('input', () => {
  checkStrength(signPassword.value, strengthBar, strengthText);
  strengthContainer.classList.toggle("width", signPassword.value.length > 0);
});

// Reset password strength
const newPasswordInput = document.getElementById('newPasswords');
const resetStrengthContainer = document.querySelector('.reset-strength-container');
const newStrengthBar = document.getElementById('newPassword-strength-bar');
const newStrengthText = document.getElementById('newPassword-strength-text');

newPasswordInput?.addEventListener('input', () => {
  checkStrength(newPasswordInput.value, newStrengthBar, newStrengthText);
  resetStrengthContainer.classList.toggle("width", newPasswordInput.value.length > 0);
});

// ===== Flip card =====
const card = document.getElementById("cards");
document.querySelectorAll('.flipBtn').forEach(btn => {
  btn.addEventListener('click', () => card.classList.toggle("flip"));
});

// ===== Forgot password =====
const forgottenBtn = document.getElementById('forgotten-password');
const forgottenModal = document.querySelector('.forgotten-password-modal');
const closeModal = document.getElementById('close-modal');
const resetBtn = document.getElementById('reset-btn');
const resetAlert = document.querySelector('.reset-alert');
const resetUserEmail = document.getElementById('reset-password-email');

forgottenBtn?.addEventListener('click', () => {
  forgottenModal.classList.add('active');
});

closeModal?.addEventListener('click', () => {
  forgottenModal.classList.remove('active');
  document.getElementById('user-email').style.display = "flex";
  document.getElementById('new-password-box').style.display = "none";
  document.getElementById('confirm-password-box').style.display = "none";
  resetUserEmail.value = "";
  resetStep = 1;
});

resetBtn?.addEventListener('click', () => {
  let users = getUsers();

  if (resetStep === 1) {
    const resetEmail = resetUserEmail.value.trim().toLowerCase();
    if (!resetEmail) return showError(resetAlert, "Enter your email");

    const userIndex = users.findIndex(user => user.email === resetEmail);
    if (userIndex === -1) return showError(resetAlert, "Email not found");

    currentUserIndex = userIndex;
    document.getElementById('user-email').style.display = "none";
    document.getElementById('new-password-box').style.display = "flex";
    document.getElementById('confirm-password-box').style.display = "flex";
    resetBtn.textContent = "Reset Password";
    resetStep = 2;
    return;
  }

  if (resetStep === 2) {
    const newPassword = document.getElementById('newPasswords').value.trim();
    const confirmPassword = document.getElementById('confirmPasswords').value.trim();

    if (!newPassword ||!confirmPassword) {
      return showError(resetAlert, "Fill all fields");
    }
    if (newPassword!== confirmPassword) {
      return showError(resetAlert, "Passwords do not match");
    }

    users[currentUserIndex].password = btoa(newPassword);
    saveUsers(users);

    resetBtn.textContent = "Resetting...";

    setTimeout(() => {
      resetBtn.textContent = "Successful";
      backgroundCover.style.display = "block";
      successBox.style.opacity = "1";
    }, 1000);

    setTimeout(() => {
      forgottenModal.classList.remove('active');
      resetStep = 1;
      currentUserIndex = null;
      resetBtn.textContent = "Next";
      document.getElementById('user-email').style.display = "flex";
      document.getElementById('new-password-box').style.display = "none";
      document.getElementById('confirm-password-box').style.display = "none";
    }, 2500);
  }
});

// ===== Ranks =====
const RANKS = [
  { level: 0, name: "Unranked", icon: "/icons/ranks/unranked.png" },
  { level: 1, name: "Bronze", icon: "/icons/ranks/bronze.png" },
  { level: 2, name: "Silver", icon: "/icons/ranks/silver.png" },
  { level: 3, name: "Gold", icon: "/icons/ranks/gold.png" }
];

function getRankInfo(rankNumber) {
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (rankNumber >= RANKS[i].level) return RANKS[i];
  }
  return RANKS[0];
}