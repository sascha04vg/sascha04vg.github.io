const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

// banner

var bannerClose = document.querySelector(".banner-close");
var banner = document.querySelector(".banner");

bannerClose.addEventListener("click", () => {
  banner.classList.remove("active");
});
