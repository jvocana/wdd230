
// items used in footer
const d = new Date();

const currDate = d.toDateString();

document.querySelector('#currDate').textContent = currDate;

const year = d.getFullYear();

const authorName = 'Jaxon Vocana'

const footerContent = `&copy ${year} | ${authorName} | wdd230 Project | Last Updated: ${document.lastModified}`;

// adding the formatted string to the document
document.querySelector('#footerContent').innerHTML = footerContent;



// toggle menu
function toggleMenu() {
    document.querySelector('#primaryNav').classList.toggle('open');
}

document.querySelector('#menuButton').onclick = toggleMenu;

