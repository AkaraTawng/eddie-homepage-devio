

const menuBox = document.querySelector(".menu-box");
const menuIcons = document.querySelectorAll(".menu-icon");
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const serviceCardsOuterContainer = document.querySelector(".service-cards-outer-container");
let serviceCards = document.querySelectorAll('.service-card-outer-container');
const largeScreenQuery = window.matchMedia("(min-width: 1280px)");

if(largeScreenQuery.matches){
    //header join email left slide in
    

    //service cards staggered slide up
    let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        setTimeout(() => {
            entry.target.classList.toggle('animate__fadeInUpBig', entry.isIntersecting)
            if(entry.isIntersecting) observer.unobserve(entry.target)
        }, 200 * (index + 1));
      
    })
}, 
{
    root: null,
    threshold: 0,
    rootMargin: "50px",
}); 

serviceCards.forEach(serviceCard => {
    observer.observe(serviceCard);
})
}
