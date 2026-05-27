
const dropdowns = document.querySelectorAll("[data-dropdown]");

dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector(".dropdown-toggle");

  button.addEventListener("click", (e) => {
    e.stopPropagation();
,,    
, 
 .. 
    // close others
    dropdowns.forEach(d => d.classList.remove("active"));
zmmx
  zmmx
    // open current
    dropdown.classList.toggle("active");
  });
});

// click outside closes all
document.addEventListener("click", () => {
  dropdowns.forEach(d => d.classList.remove("active"));
});

/*Airttime Toggle*/
const networkItems = document.querySelectorAll(".dropdown-item");
const display = document.getElementById("airtime-type");

networkItems.forEach(item => {
  item.addEventListener("click", () => {
    const src = item.src;
    display.innerHTML = `<img src="${src}" style="width:30px; height: 30px; border-radius: 100%;">`;
    item.closest(".dropdown").classList.remove("active");
  });
});

/*Top-Up Input*/
const priceInput = document.getElementById("price");
const amounts = document.querySelectorAll(".top-up-nav");
const error = document.getElementById("error");
const payBtn = document.getElementById("pay-button");

let state = {
  amount: ""
}

priceInput.addEventListener("input", () => {
  let raw = priceInput.value.replace(/[^0-9]/g, "");

  state.amount = raw;

  validate(raw);   // check if valid
  render();        // update UI
});

function validate(value) {
  if (value === "") {
    error.textContent = "";
    payBtn.disabled = true;
    return;
  }

  let num = Number(value);

  if (num < 50) {
    error.textContent = "Minimum amount is  ₦50";
    payBtn.disabled = true;
  } else if (num > 200000) {
    error.textContent = "Maximum amount is ₦500,000";
    payBtn.disabled = true;
  } else {
    error.textContent = "";
    payBtn.disabled = false;
  }
}

amounts.forEach(item => {
  item.addEventListener("click", () => {
    state.amount = item.dataset.value;

    validate(state.amount);
    render();
  });
});

function render() {
  if (state.amount.length > 3) {
    priceInput.value = Number(state.amount).toLocaleString();
  } else {
    priceInput.value = state.amount;
  }

  amounts.forEach(item => {
    item.classList.toggle(
      "active",
      item.dataset.value === state.amount
    );
  });
}

let opened = false;

const historyBtn = document.getElementById('history-btn');
const historyContainer = document.getElementById('history-container');


historyBtn.addEventListener('click', (e) =>{
  e.stopPropagation();
  
  if(!opened){
  historyContainer.style.opacity = "1";
  historyContainer.pointerEvents = "auto";
  historyContainer.style.height = "100vh";
  historyContainer.textContent = "No history";
  historyContainer.style.paddingTop = '50px';
  historyContainer.style.textAlign = 'center';
  historyContainer.style.pointerEvents = 'auto';
  }else{
  historyContainer.style.opacity = "0";
  historyContainer.pointerEvents = "none";
  historyContainer.style.height = "0";
  }
  opened = !opened;
}); 