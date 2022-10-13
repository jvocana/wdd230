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




// banner display message
const banner = document.querySelector('#banner');
const currDay = 1;

function displayBanner (text) {
    // if it is monday or tuesday
    if (currDay == 1 || currDay == 2) {
        // adding text to banner
        bannerMessage = document.createElement('div');
        bannerMessage.textContent = text;
        
        // delete button
        bannerDelete = document.createElement('button');
        bannerDelete.setAttribute('aria-label', 'Close welcome Banner');
        bannerDelete.textContent = '❌';

        banner.appendChild(bannerMessage);
        banner.appendChild(bannerDelete);

        
        // toggling classlist to display banner
        banner.classList.toggle('displayBanner');
        bannerDelete.addEventListener('click', deleteBanner => {
            banner.classList.toggle('displayBanner');
        });
    };
};

displayBanner ('🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.')
