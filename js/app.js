/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

const navbar = document.querySelector('.navbar__menu')
const navbarList = document.getElementById('#navbar__list');
const navSections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
const minor = window.innerHeight;



/**
 * End Global Variables
 * Start Helper Functions
 * 
 * 
 */
// build the nav
navSections.forEach(section => {
    //creat new li element 

    const link = document.createElement('li');

    link.innerHTML = `<a href="#${section.id}" class="menu__link" data-link="${section.dataset.nav}">
    ${section.dataset.nav}
</a>`

    fragment.appendChild(link);
});
navbar.appendChild(fragment);

//This is the helper function for a scroll (I set it a bit slow for visibility)
const scrollToTop = () => {
    const scrolling = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrolling > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, scrolling - scrolling / 50);
    }
};

//Checks if section is in view 
window.addEventListener("scroll", (section) => {

    for (let section of navSections) {
        const sectionBounding = section.getBoundingClientRect();
        console.log(sectionBounding)

        if ((sectionBounding.top >= 0 && sectionBounding.top <= window.innerHeight * 0.75) &&
            sectionBounding.left >= 0 &&
            sectionBounding.right <= (minor || document.documentElement.clientWidth) &&
            sectionBounding.bottom <= (minor || document.documentElement.clientHeight)) {

            for (i = 1; i < navSections.length; i++) {
                let sectionInFullView = document.getElementById("section" + i);

                sectionInFullView.classList.add("your-active-class");

            }
        }

    }
});





//add fixed nav

window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
});
//// new object with screen as root element
/*const observer = new IntersectionObserver(function(navSections) {
for (let i = 0; i < navSections.length; i++) {
    if (navSections[i]['isIntersecting'] === true) {
        if (navSections[i]['intersectionRatio'] === 1)
            navSections[i].classList.add("your-active-class");
    }


}
// callback code
}, { root: null });

// observing a target element
observer.observe(document.querySelector("#section1"));
observer.observe(document.querySelector("#section2"));
observer.observe(document.querySelector("#section3"));*/ // The checker//Checks if section is in view and adds active-class with moving background and color change