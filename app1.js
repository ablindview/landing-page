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
const  navigation = document.getElementsById('navbar__list');
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
    let navUI = '';
    // looping over all sections
    sections.forEach(section => {
        const sectionID = section.ID;
        const sectionDataNav = section.dataset.nav;

        navUI += '<li><a class = "menu_link" href = "#${sectionID}">${sectionDataNav}</a></li>';
    });
    // append all elements to the navigation
    navigation.innerHTML = navUI;
}
navBuilder();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active