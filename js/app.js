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



//Checks if section is in view  then highlight it 
window.addEventListener("scroll", (section) => {
    //capture the current section 
    let scrollPosition = document.documentElement.scrollTop;
    //itereate over all sections
    navSections.forEach((section) => {
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
            scrollPosition <
            section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
        ) {
            const currentId = section.dataset.nav;
            console.log(currentId)
            section.classList.add("your-active-class");
        }
    });


});


var removeAllActiveClasses = function() {
    document.querySelectorAll(".menu__link").forEach((el) => {
        el.classList.remove("active");
    });
};

var addActiveClass = function() {
    document.querySelectorAll(".menu__link").forEach((el) => {
        el.classList.add("active");
    });
}




//smooth scroll'

let navLinks = document.querySelectorAll(".menu__link ");
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        let currentId = e.target.attributes.href.value;

        let section = document.querySelector(currentId);
        let sectionPos = section.offsetTop;


        section.scrollIntoView({
            behavior: "smooth"

        });


        window.scroll({
            top: sectionPos,
            behavior: "smooth",
        });
    });
});


//add fixed nav when scroll
window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
});