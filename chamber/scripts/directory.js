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


const requestURL = 'https://jvocana.github.io/wdd230/chamber/json/directory.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusiness);
});
