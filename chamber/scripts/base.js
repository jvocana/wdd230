
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
    logo.setAttribute('src', business.logo[0]);
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
    
};



function displayGoldMembers (businesses) {
   
        let div = document.createElement('div');
        
        let h2 = document.createElement('h2');
        h2.textContent = businesses.name;

        let picture = document.createElement('picture');
        
        let source1 = document.createElement('source');
        source1.setAttribute('srcset', businesses.logo[2]);
        source1.setAttribute('media', '(min-width: 75em)');
        source1.setAttribute('loading', 'lazy');
        
        let source2 = document.createElement('source');
        source2.setAttribute('srcset', businesses.logo[1]);
        source2.setAttribute('media', '(min-width: 40em) and (max-width: 74.9em)');
        source2.setAttribute('loading', 'lazy');
        
        let img = document.createElement('img');
        img.setAttribute('src', businesses.logo[0]);
        img.setAttribute('alt', `logo for ${businesses.name}`);
        img.setAttribute('loading', 'lazy');
       
        let p1 = document.createElement('p');
        p1.textContent = businesses.slogan;
        
        let br = document.createElement('br');
        
        let p2 = document.createElement('p');
        p2.textContent = businesses.phone;
        
        let p3 = document.createElement('p');
        p3.textContent = businesses.email;

        picture.appendChild(source1);
        picture.appendChild(source2);
        picture.appendChild(img);

        div.appendChild(h2);
        div.appendChild(picture);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(br);
        div.appendChild(p3);

        document.querySelector('main #spotlightsection').appendChild(div);


        
        
        
    
};

const requestURL = 'https://jvocana.github.io/wdd230/chamber/json/directory.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        businesses.forEach(displayBusiness);
    });

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const businesses = jsonObject['businesses'];
        businesses.forEach(displayGoldMembers);
    });
