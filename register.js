document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("regUsername").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  const confirmPassword = document.getElementById("regConfirmPassword").value.trim();
  const message = document.getElementById("register-message");

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
    return;
  }

  if (localStorage.getItem("user_" + username)) {
    message.textContent = "Username already exists.";
    message.style.color = "red";
    return;
  }

  const user = {
    username,
    email,
    password
  };

  localStorage.setItem("user_" + username, JSON.stringify(user));
  message.textContent = "Registration successful! Redirecting to login...";
  message.style.color = "green";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
});
