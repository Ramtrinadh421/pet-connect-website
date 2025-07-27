document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  const storedUser = localStorage.getItem("user_" + username);

  if (storedUser) {
    const user = JSON.parse(storedUser);
    if (user.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", username);
      alert("Login successful!");
      window.location.href = "home.html";
    } else {
      errorMessage.textContent = "Incorrect password.";
    }
  } else {
    errorMessage.textContent = "User not found. Please register.";
  }
});
