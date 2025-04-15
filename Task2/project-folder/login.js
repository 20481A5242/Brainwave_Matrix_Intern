function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if ((username === "user" && password === "1234") || localStorage.getItem(username) === password) {
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials. Try user/1234 or sign up.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");
  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length > 0 && passwordInput.type === "password") {
      togglePassword.classList.remove("fa-eye");
      togglePassword.classList.add("fa-eye-slash");
    } else if (passwordInput.value.length === 0) {
      togglePassword.classList.remove("fa-eye-slash");
      togglePassword.classList.add("fa-eye");
    }
  });

  togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
  });
});
