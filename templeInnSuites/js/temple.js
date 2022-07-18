
  
 
function displayTemples (temple) {
    card =`<div class="card">
            <h2>${temple.name}</h2>
            <picture>
                <img src=${temple.img} alt=${temple.name} loading="lazy">
            </picture>
            <section class="cardButtons">
                <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>
                <button id="seeMoreButton">&#9776;</button> 
            </section>
            
            <section id="moreInfo">
                <p>${temple.location}</p>
                <a href=${temple.email}>email</a>
                <p>${temple.phone}</p>
                <p>Dedicated on ${temple.dedicated}</p>
                <p>appointments</p>
            </section>
            
        </div>`;
    let cardWrapper = document.createElement('div');
    cardWrapper.setAttribute('class', 'card');

    document.querySelector('main').appendChild(card);
    
    
    
    
    
   
};

const requestURL = 'https://jvocana.github.io/wdd230/templeInnSuites/json/temples.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);
    })

