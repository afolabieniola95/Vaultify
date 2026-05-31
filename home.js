window.addEventListener('DOMContentLoaded', () => {

  const currentUser = window.getCurrentUser();

  if (!currentUser) {
    window.location.href = "index.html";
    return;
  }

  // DOM
  const nameEl = document.getElementById("user-name");
  const balanceEl = document.getElementById("user-balance");
  const avatarDiv = document.getElementById("user-avatar");
  const symbol = document.getElementById("symbol");

  // User data
  nameEl.textContent = currentUser.name;
  balanceEl.textContent = currentUser.balance;
  symbol.innerHTML = "";
  balanceEl.textContent = "****";
  
  avatarDiv.style.backgroundImage = currentUser.avatar
    ? `url(${currentUser.avatar})`
    : `url(icon/no-profile.png)`;

  // Toggle balance
  let toggled = false;

  const toggle = document.querySelectorAll('.toggle-balance');
  const opened = document.getElementById('opened');
  const closed = document.getElementById('closed');

  toggle.forEach(btn => {

    btn.addEventListener('click', () => {

      if (!toggled) {

        opened.style.display = "none";
        closed.style.display = "block";

        balanceEl.textContent = currentUser.balance;
        symbol.innerHTML = "&#8358";
        toggled = true;

      } else {

        opened.style.display = "block";
        closed.style.display = "none";

        balanceEl.textContent = "*****";
        symbol.innerHTML = "";
        toggled = false;
      }

    });

  });

});