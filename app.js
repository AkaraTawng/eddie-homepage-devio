import 'animate.css';

const menuBox = document.querySelector(".menu-box");
const menuIcons = document.querySelectorAll(".menu-icon");
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const serviceCardsOuterContainer = document.querySelector(".service-cards-outer-container");

const serviceCards = document.querySelectorAll(".service-card-outer-container");

menuIcons.forEach(menuIcon => {
    menuIcon.onclick = function(){
        menuBox.classList.toggle('open-menu');
        menuOpen.classList.toggle('open')
        menuClose.classList.toggle('open')
    }
});

function serviceCardCallback(entries){
    entries.forEach(entry => {
        console.log(entry)
    })
};

const serviceCardOptions = {};

const serviceCardsObs = new IntersectionObserver(serviceCardCallback, serviceCardOptions);

serviceCardsObs.observe(serviceCardsOuterContainer)