
// creating variables for the category divs

const motorcycle = document.querySelector('#motorcycle .container');
const shoes = document.querySelector('#shoes .container');
const lego = document.querySelector('#lego .container');
const audio = document.querySelector('#audio .container');
const computer = document.querySelector('#computer .container');
const books = document.querySelector('#books .container');



function displayItems (item) {

    // creating container for each item
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    // name
    let name = document.createElement('h3');
    name.textContent = `${item.name}`;

    // picture
    let picture = document.createElement('img');
    picture.setAttribute('src', item.picture);
    picture.setAttribute('alt', item.description);

    // website
    let website = document.createElement('a');
    website.setAttribute('href', item.url);
    website.textContent = `${item.url}`;
    website.setAttribute('target', 'blank');

    // description
    let description = document.createElement('p');
    description.textContent = `${item.description}`;



    // adding elements to card
    card.appendChild(name);
    card.appendChild(picture);
    card.appendChild(website);
    card.appendChild(description);

    // adding card to the appropriate category
    if (item.category == 'motorcycle') {
        motorcycle.appendChild(card);
    } else if (item.category == 'shoes') {
        shoes.appendChild(card);
    } else if (item.category == 'lego') {
        lego.appendChild(card);
    } else if (item.category == 'audio') {
        audio.appendChild(card);
    } else if (item.category == 'computer') {
        computer.appendChild(card);
    } else if (item.category == 'books') {
        books.appendChild(card);
    };

};

const requestURL = 'items.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const items = jsonObject['items'];
    items.forEach(displayItems);
});