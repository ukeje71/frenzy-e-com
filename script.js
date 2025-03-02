const hamburger = document.querySelector(".menu-bar");
const navMenu = document.querySelector(".General-list");

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});
