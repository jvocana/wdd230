const results = document.querySelector('#results');
const fname = document.querySelector('form label input [name=fname]');
const email = document.querySelector('form label input [name=email]');
const phone = document.querySelector('form label input [name=phone]');
 
function displayResults () {
    // information values
       // take the values from the order and put it into html
    let information = 
    `
    <div>
        <p>Name: ${fname.value}</p>
        <p>Email: ${email.value}</p>
        <p>Phone: ${phone.value}</p>
    </div>

    `;

    results.appendChild(information);
}


