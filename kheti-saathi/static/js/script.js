function toggleNav() {
    const nav = document.getElementById("navLinks");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  }
  
  /* Login Modal */
  function openAuth() {
    document.getElementById("authModal").style.display = "block";
  }
  
  function closeAuth() {
    document.getElementById("authModal").style.display = "none";
  }
  
  function showLogin() {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  }
  
  function showSignup() {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  }
  const counters = document.querySelectorAll("[data-count]");

counters.forEach(counter => {
  let target = +counter.dataset.count;
  let count = 0;

  let interval = setInterval(() => {
    count += Math.ceil(target / 100);
    if (count >= target) {
      counter.innerText = target;
      clearInterval(interval);
    } else {
      counter.innerText = count;
    }
  }, 20);
});
