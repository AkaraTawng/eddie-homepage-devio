

const menuBox = document.querySelector(".menu-box");
const menuIcons = document.querySelectorAll(".menu-icon");
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const serviceCardsOuterContainer = document.querySelector(".service-cards-outer-container");
let serviceCards = document.querySelectorAll('.service-card-outer-container');
const largeScreenQuery = window.matchMedia("(min-width: 1280px)");
const heroEmailContactContainer = document.querySelector('#hero-email-contact-container');
const portfolioItemsEven = document.querySelectorAll(".portfolio-item-container.even");
const portfolioItemsOdd = document.querySelectorAll(".portfolio-item-container.odd");

/* IO is defaulting to 'isIntersecting: true' and intersectionRatio: 1'. Find way to default to 'isIntersecting: false' and intersectionRatio: 0' */
const emailObserverOptions = { threshold: 0.1, rootMargin: '0px'};
if(largeScreenQuery.matches){
    //hero join email left slide in
    let emailObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // if(!entry.isIntersecting) return;
            // console.log(entry)
            entry.target.classList.toggle('animate__slideInLeft')
            // emailObserver.unobserve(entry.target)
        })
    }, emailObserverOptions)

    emailObserver.observe(heroEmailContactContainer);

    //service cards staggered slide up
    let serviceCardsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        setTimeout(() => {
            entry.target.classList.toggle('animate__fadeInUpBig', entry.isIntersecting)
            if(entry.isIntersecting) serviceCardsObserver.unobserve(entry.target)
        }, 300 * (index + 1));
    })
}, 
{
    root: null,
    threshold: 0,
}); 

serviceCards.forEach(serviceCard => {
    serviceCardsObserver.observe(serviceCard);
})
}


const portfolioItemsEvenObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        // console.log(entry)
        entry.target.classList.add('animate__slideInRight');
        portfolioItemsEvenObserver.unobserve(entry.target);
    })
}, );

portfolioItemsEven.forEach(portfolioItem => {
    portfolioItemsEvenObserver.observe(portfolioItem);
});

const portfolioItemsOddObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        console.log(entry)
        entry.target.classList.add('animate__slideInLeft');
        portfolioItemsOddObserver.unobserve(entry.target);
    })
}, );

portfolioItemsOdd.forEach(portfolioItem => {
    portfolioItemsOddObserver.observe(portfolioItem);
});

