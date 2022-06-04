
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


// local storage last time visited

// {lastVisit: timestamp,
//  currentVisit: timestamp}
const oneDay = 1000 * 3600 * 24;



function setVisit(laVisit, currVisit) {
    if (laVisit == 'none') {
        localStorage.setItem('currentVisit', currVisit);
    }
    else if (currVisit == 'none') {
        localStorage.setItem('lastVisit', laVisit);
    }
    

};


function dateDiff (currVisit, laVisit) {
    days = Math.round(currVisit - laVisit);
    string = `It has been ${days} since your last visit.`;
    return string;
};
setVisit(laVisit='none', currVisit=0);
const currentVisit = Number(localStorage.getItem('lastVisit'));
const lastVisit = Number(localStorage.getItem('lastVisit'));
const lastVisited = document.querySelector('#lastVisited');
// if the site has never been visited
if (currentVisit == 0 & lastVisit == 0) {
    lastVisited.textContent = 'This is your first visit.'
    // next time they visit the site this will be right
    setVisit(laVisit=Date.now(), currVisit='none');
}
// if the site has been visited once before
else if (lastVisit != 0 & currentVisit == 0) {
    setVisit(laVisit='none', currVisit=Date.now());
    // call date difference function
    
    lastVisited.textContent = dateDiff(currVisit=currentVisit, laVisit=lastVisit);
    // set last to current and set current to zero
    setVisit(currVisit='none', laVisit=currentVisit);
    setVisit(currVisit = 0, laVisit='none');
};

console.log(lastVisit);

