

const menuBox = document.querySelector(".menu-box");
const menuIcons = document.querySelectorAll(".menu-icon");
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const serviceCardsOuterContainer = document.querySelector(".service-cards-outer-container");
let serviceCards = document.querySelectorAll('.service-card-outer-container');
const largeScreenQuery = window.matchMedia("(min-width: 1280px)");
const heroEmailContactContainer = document.querySelectorAll('#hero-email-contact-container');
const portfolioItemsEven = document.querySelectorAll(".portfolio-item-container.even");
const portfolioItemsOdd = document.querySelectorAll(".portfolio-item-container.odd");
const teamWomanImage = document.querySelector('#woman');
const teamManNoGlassesImage = document.querySelector('#man-no-glasses');
const teamManGlassesImage = document.querySelector('#man-glasses');
const teamTextContent = document.querySelector('#team-text-content');

menuIcons.forEach(menuIcon => {
    menuIcon.onclick = function(){
        menuBox.classList.toggle('open-menu');
        menuOpen.classList.toggle('open')
        menuClose.classList.toggle('open')
    }
});

/* IO is defaulting to 'isIntersecting: true' and intersectionRatio: 1'. Find way to default to 'isIntersecting: false' and intersectionRatio: 0' */
if(largeScreenQuery.matches){
    //hero join email left slide in
    let emailObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                 console.log(entry)
            entry.target.classList.toggle('animate__slideInLeft')
            } return;
           
            // emailObserver.unobserve(entry.target)
        })
    })
    
    heroEmailContactContainer.forEach(item => {
        emailObserver.observe(item);
    })
    

    //service cards scroll staggered slide in up animation
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

//portfolio item odd scroll slide in right animation
const portfolioItemsEvenObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('animate__slideInRight');
        portfolioItemsEvenObserver.unobserve(entry.target);
    })
}, );

portfolioItemsEven.forEach(portfolioItem => {
    portfolioItemsEvenObserver.observe(portfolioItem);
});

//portfolio item odd scroll slide in left animation
const portfolioItemsOddObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('animate__slideInLeft');
        portfolioItemsOddObserver.unobserve(entry.target);
    })
}, );

portfolioItemsOdd.forEach(portfolioItem => {
    portfolioItemsOddObserver.observe(portfolioItem);
});
}

//Team section Intersection Observer scroll animations
const teamManNoGlassesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('animate__slideInRight');
    })
})

teamManNoGlassesObserver.observe(teamManNoGlassesImage);

const teamWomanObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('animate__slideInLeft');
    })
})

teamWomanObserver.observe(teamWomanImage);

const teamManGlassesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('animate__slideInRight');
    })
})

teamManGlassesObserver.observe(teamManGlassesImage);

const teamTextContentObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            entry.target.style.opacity = 0;
        } else {
              entry.target.style.opacity = 1;
        entry.target.classList.add('animate__flipInY');
        }
    });
}, {
    threshold: 0.9
});

teamTextContentObserver.observe(teamTextContent);