window.getUsers = function () {
  return JSON.parse(localStorage.getItem("users")) || [];
};

window.saveUsers = function (users) {
  localStorage.setItem("users", JSON.stringify(users));
};

window.setCurrentUser = function (user) {
  localStorage.setItem("currentUser", user.id);
};

window.getCurrentUser = function () {
  const id = localStorage.getItem("currentUser");

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  return users.find(user => user.id === id);
};