// items used in footer
const d = new Date();

const currDate = d.toDateString();

//document.querySelector('#currDate').textContent = currDate;

const year = d.getFullYear();

const authorName = 'Jaxon Vocana'

const projectInfo = `&copy ${year} | ${authorName} | wdd230 Project`;

const lastModified = `Last Updated: ${document.lastModified}`;

// adding the formatted string to the document
document.querySelector('#projectInfo').innerHTML = projectInfo;
document.querySelector('#lastModified').innerHTML = lastModified;


// toggle menu
function toggleMenu() {
    document.querySelector('#primaryNav').classList.toggle('open');
}

document.querySelector('#menuButton').onclick = toggleMenu;