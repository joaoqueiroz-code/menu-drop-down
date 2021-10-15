var menuIcon = document.querySelector(".menuButton");
var menuDropdown = document.querySelector(".menu");

menuIcon.addEventListener("click", function dropdown(evt) {
    evt.preventDefault()
    menuDropdown.classList.toggle("menu--open");

})

