
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





// hidden form element
//document.querySelector('#currFormTime').textContent = Date.now();



// directory page 

// menu display buttons
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const directoryWrapper = document.querySelector('#directoryWrapper');

function showList () {
    directoryWrapper.classList.add('list');
    directoryWrapper.classList.remove('grid');
}
function showGrid () {
    directoryWrapper.classList.remove('list');
    directoryWrapper.classList.add('grid');
}


gridButton.addEventListener('click', showGrid);
listButton.addEventListener('click', showList);

// directory fetch

function displayBusiness (business) {
    let card = document.createElement('section');
    
    // business name
    let h2 = document.createElement('h2');
    h2.textContent = `${business.name}`;

    // logo
    let logo = document.createElement('img');
    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `logo for ${business.name}`);
    logo.setAttribute('loading', 'lazy');
    
    // website
    let website = document.createElement('a');
    website.setAttribute('href', business.websiteurl);
    website.textContent = `${business.websiteurl}`;

    // phone
    let phone = document.createElement('p');
    phone.textContent = business.phone;

    // adding everything to card
    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(website);
    card.appendChild(phone);

    // adding card to document
    document.querySelector('#directoryWrapper').appendChild(card);
    
}

const requestURL = 'https://jvocana.github.io/wdd230/chamber/json/directory.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        businesses.forEach(displayBusiness);
    });

