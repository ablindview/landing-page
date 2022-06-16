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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const  navigation = document.getElementById('navbar_list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBuilder = () => {

    let navUI = ' ';
    // looping over all sections
    sections.forEach(section => {
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class = "menu__link" href = "#${sectionID}">${sectionDataNav}</a></li>`;
    });
    // append all elements to the navigation
    navigation.innerHTML = navUI;
}
navBuilder();

// Add class 'active' to section when near top of viewport
const offSet = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background_color:  rgba(255, 255, 255, 0.187);;";
};
const addActive = (conditional, section) => {
    if (conditional) {
        section.classList.add('your-active-class');
        section.style.cssText = "background_color: purple;";
    };
};
const sectionActivation = () => {
    sections.forEach (section => {
        const elementOffset = offSet(section);
        inviewport = () => elementOffset < 100 && elementOffset >= -100;
        removeActive(section);
        addActive(inviewport(), section);
    });
};
window.addEventListener('scroll', sectionActivation);

// Scroll to anchor ID using scrollTO event

const scrolls = () => {
    const links = document.querySelectorAll('.navbar_menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0; i < sections; i ++) {
                sections[i].addEventListener('click', sectionScroll(link));
            }
        });
    });
};
scrolls();
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active