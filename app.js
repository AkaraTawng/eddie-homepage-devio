const menuBox = document.querySelector(".menu-box");
const menuIcons = document.querySelectorAll(".menu-icon");
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");

menuIcons.forEach(menuIcon => {
    menuIcon.onclick = function(){
        menuBox.classList.toggle('open-menu');
        menuOpen.classList.toggle('open')
        menuClose.classList.toggle('open')
    }
});


