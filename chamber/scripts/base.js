
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


// display banner

const banner = document.querySelector('#banner')

// test day
const currDay = d.getDay();

function displayBanner(text) {
    if (currDay == 1 || currDay == 2) {
        // creating elements
        bannerMessage = document.createElement('div');
        deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        // adding listening event to delete button
        
        // adding new elements to appropriate place
        banner.appendChild(bannerMessage);
        bannerMessage.appendChild(deleteButton);

        // toggling class so banner message is displayed
        banner.classList.toggle('showBanner');
        deleteButton.addEventListener('click', deleteBanner => {
            banner.classList.toggle('showBanner');

        });
    };
    

};



displayBanner('🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.');


