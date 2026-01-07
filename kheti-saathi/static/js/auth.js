const modal = document.getElementById("authModal");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

/* OPEN MODAL */
function openAuth() {
  modal.style.display = "flex";
  showLogin();
}

/* CLOSE MODAL */
function closeAuth() {
  modal.style.display = "none";
}

/* CLICK OUTSIDE TO CLOSE */
window.onclick = function (e) {
  if (e.target === modal) {
    closeAuth();
  }
};

/* SHOW LOGIN */
function showLogin() {
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
}

/* SHOW SIGNUP */
function showSignup() {
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
}
