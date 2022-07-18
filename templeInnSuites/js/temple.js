function displayTemples (temple) {
    let htmlString =`<div class="card">
            <h2>temple name</h2>
            <picture>
                <img src=${temple.img} alt=${temple.name} loading="lazy">
            </picture>
            <section class="cardButtons">
                <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>
                <button id="seeMoreButton">&#9776;</button> 
            </section>
            
            <section class="moreInfo">
                location
                <a href=${temple.email}>email</a>
                <p>${temple.phone}</p>
                <p>temple.dedicated</p>
                <a>appointments</a>
            </section>
            
        </div>`;
    document.querySelector('main').innerHTML += htmlString;
};

const requestURL = '';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);
    })