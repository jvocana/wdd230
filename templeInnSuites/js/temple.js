// card =`<div class="card">
//             <h2>${temple.name}</h2>
//             <picture>
//                 <img src=${temple.img} alt=${temple.name} loading="lazy">
//             </picture>
//             <section class="cardButtons">
//                 <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>
//                 <button id="seeMoreButton">&#9776;</button> 
//             </section>
            
//             <section id="moreInfo">
//                 <p>${temple.location}</p>
//                 <a href=${temple.email}>email</a>
//                 <p>${temple.phone}</p>
//                 <p>Dedicated on ${temple.dedicated}</p>
//                 <p>appointments</p>
//             </section>
            
//         </div>`;
  
 
function displayTemples (temple) {
    let h2 = document.createElement('h2');
    h2.textContent = temple.name;

    let picture = document.createElement('picture');
    let img = document.createElement('img');
    img.setAttribute('src', temple.img);
    img.setAttribute('alt', temple.name);
    picture.appendChild(img);

    let cardButtons = document.createElement('section');
    cardButtons.setAttribute('class', 'cardButtons');
    let likeButton = document.createElement('i');
    likeButton.setAttribute('onclick', 'myFunction(this)');
    likeButton.setAttribute('class', 'fa fa-thumbs-up');

    let seeMoreButton = document.createElement('button');
    seeMoreButton.setAttribute('id', 'seeMoreButton');
    seeMoreButton.textContent = '&#9776;'

    cardButtons.appendChild(likeButton);
    cardButtons.appendChild(seeMoreButton);


    let moreInfo = document.createElement('section');
    moreInfo.setAttribute('id', 'moreInfo');

    let location = document.createElement('p');
    location.textContent = temple.location;

    let email = document.createElement('a');
    email.textContent = 'email';
    email.setAttribute('href', temple.email);

    let phone = document.createElement('p');
    phone.textContent = temple.phone;

    let dedicated = document.createElement('p');
    dedicated.textContent = temple.dedicated;

    let appointments = document.createElement('p');
    appointments.textContent = 'appointments';

    moreInfo.appendChild(location);
    moreInfo.appendChild(email);
    moreInfo.appendChild(phone);
    moreInfo.appendChild(dedicated);
    moreInfo.appendChild(appointments);

    let cardWrapper = document.createElement('div');
    cardWrapper.setAttribute('class', 'card');

    cardWrapper.appendChild(h2);
    cardWrapper.appendChild(picture);
    cardWrapper.appendChild(cardButtons);
    cardWrapper.appendChild(moreInfo);


    
    // document.querySelector('#seeMoreButton').addEventListener('click', showInfo => {
    //     document.querySelector('#moreInfo').classList.toggle('showInfo')
    // });
    
    
   
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

