const navBtn = document.getElementById("navbtn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("navbar-close");

navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
