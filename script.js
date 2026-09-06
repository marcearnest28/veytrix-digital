const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const year = document.getElementById("year");

menuButton.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
  });
});

year.textContent = new Date().getFullYear();

