import 'animate.css';

const menuBox = document.querySelector(".menu-box");
const menuIcons = document.querySelectorAll(".menu-icon");
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const serviceCardsOuterContainer = document.querySelector(".service-cards-outer-container");

let options = {};

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        console.log(entry);
    })
}

let observer = new IntersectionObserver(callback, options);