// drink option container
const drinkOptions = document.querySelector('#drinkOptions');


function displayFruits (fruit) {
        
        let option = 
            `<label class="sbs"><input type="checkbox" name="drinkOption" class="check" value="${fruit.name}">${fruit.name}</label>`
        ;

        drinkOptions.innerHTML += option;
        
};


const fname = document.querySelector('#fname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
 
function displayResults () {
    
    // take the values from the order and put it into html
    let information = 
    `
        <p>Name: ${fname.value}</p>
        <p>Email: ${email.value}</p>
        <p>Phone: ${phone.value}</p>
    `;

    document.querySelector('#information').innerHTML += information;

    // getting the ingredients
    let checkedBoxes = document.querySelectorAll('input:checked')

    // adding the ingredients 
    checkedBoxes.forEach(function (item) {
        let ingredient = 
        `
        <p>${item.value}</p>
        `;
        document.querySelector('#ingredients').innerHTML += ingredient;
    });

    calories = 0;
    carbs  = 0;
    fat = 0;
    protein = 0;
    sugar = 0;
    // calculate the nutrition
    checkedBoxes.forEach(function (item) {
        fruit.forEach(function (fruit) {
            if (item.value == fruit.name) {
                calories += fruit.nutritions.calories;
                carbs += fruit.nutritions.carbohydrates;
                fat += fruit.nutritions.fat;
                protein += fruit.nutritions.protein;
                sugar += fruit.nutritions.sugar;
            }
        })
        
    });
    
    let nutritionResults = 
    `
    <h4>Nutrition Facts</h4>
    <p>Calories: <span>${Math.round(calories)}</span></p>
    <p>Fat: <span>${Math.round(fat)}</span></p>
    <p>Carbs: <span>${Math.round(carbs)}</span></p>
    <p>Sugar: <span>${Math.round(sugar)}</span></p>
    <p>Protein: <span>${Math.round(protein)}</span></p>
    `;

    document.querySelector('#nutritionFacts').innerHTML = nutritionResults;
    
}

// calculating the ingredients
const ingredients = document.querySelectorAll('.check:checked');




// fruit json url
const fruitUrl = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function fetchFruit() {
    try {
        const response = await fetch(fruitUrl);
        if (response.ok) {
            fruit = await response.json();
            console.log(fruit);
            fruit.forEach(displayFruits);
            
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

fetchFruit();

const submtiBtn = document.querySelector('#submtiBtn');
submitBtn.addEventListener('click', displayResults);
