function createSpotlight (business) {
    let div = document.createElement('div');
            
            let h2 = document.createElement('h2');
            h2.textContent = business.name;

            let picture = document.createElement('picture');
            
            let source1 = document.createElement('source');
            source1.setAttribute('srcset', business.logo[2]);
            source1.setAttribute('media', '(min-width: 75em)');
            source1.setAttribute('loading', 'lazy');
            
            let source2 = document.createElement('source');
            source2.setAttribute('srcset', business.logo[1]);
            source2.setAttribute('media', '(min-width: 40em) and (max-width: 74.9em)');
            source2.setAttribute('loading', 'lazy');
            
            let img = document.createElement('img');
            img.setAttribute('src', business.logo[0]);
            img.setAttribute('alt', `logo for ${business.name}`);
            img.setAttribute('loading', 'lazy');
        
            let p1 = document.createElement('p');
            p1.textContent = business.slogan;
            
            let br = document.createElement('br');
            
            let p2 = document.createElement('p');
            p2.textContent = business.phone;
            
            let p3 = document.createElement('p');
            p3.textContent = business.email;

            picture.appendChild(source1);
            picture.appendChild(source2);
            picture.appendChild(img);

            div.appendChild(h2);
            div.appendChild(picture);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(br);
            div.appendChild(p3);

            document.querySelector('#spotlights').appendChild(div);

}

function displayGoldMembers (businesses) {
    // randomly chooses two businesses that have a gold membership to add to the spotlight section of the home page.
    let business = businesses[Math.floor(Math.random() * businesses.length)];
    let totalDisplayed = document.querySelectorAll('#spotlights div');
    let displayedBusiness = document.querySelector('#spotlights div h2');
    
    // if there is already one displayed check to see if they are the same
    if (totalDisplayed.length == 0 && business.membership == 'gold') {
        createSpotlight(business);
    }
    else {
        // if the business isn't already being displayed then add it
            // if the business has a gold membership and there are less than two then add the business to the spotlight
            if (business.membership == "gold" && totalDisplayed.length < 2) {
                if (displayedBusiness.textContent == business.name) {
                    displayGoldMembers(businesses);
                }
                else {
                    createSpotlight(business);
                }

            }
            
            // if two businesses are displayed end
            else if (business.membership == 'silver' | business.membership == 'bronze') {
                displayGoldMembers(businesses);
            }
            // base case to stop recursion
            else if (totalDisplayed.length == 2) {
                return;
            };
    };

};
const requestURL = 'https://jvocana.github.io/wdd230/chamber/json/directory.json';



fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    const businesses = jsonObject['businesses'];
    displayGoldMembers(businesses);
    displayGoldMembers(businesses);
});
