

const menuBox = document.querySelector(".menu-box");
const menuIcons = document.querySelectorAll(".menu-icon");
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const serviceCardsOuterContainer = document.querySelector(".service-cards-outer-container");
let target = document.querySelectorAll('.service-card-outer-container');


let observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        entry.target.classList.toggle('animate__fadeInUp', entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
  console.log(entries);
}, 
{
    threshold: 0,
    // rootMargin: "-100px",
}); 

target.forEach(target => {
    observer.observe(target);
})