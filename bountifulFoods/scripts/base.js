
// last modified
const lastModified = `Last Modification: ${document.lastModified}`;

document.querySelector('#lastModified').innerHTML = lastModified;

// opening and closing nav menu
function toggleMenu () {
    document.querySelector('#primaryNav').classList.toggle('open');
};
document.querySelector('#menuButton').addEventListener('click', toggleMenu);