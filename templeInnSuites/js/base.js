
// items used in footer
const d = new Date();

const year = d.getFullYear();

const authorName = 'Jaxon Vocana'

const footerContent = `&copy ${year} | ${authorName} | Last Updated: ${document.lastModified}`;

// adding the formatted string to the document
document.querySelector('#lastModified').textContent = footerContent;


// toggle menu
function toggleMenu() {
    document.querySelector('#primaryNav').classList.toggle('open');
}

document.querySelector('#menuButton').onclick = toggleMenu;

