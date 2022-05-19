const input = document.querySelector('#favchap');
const button = document.querySelector('[type=submit]');
const list = document.querySelector('.list');

function addChapter() {
    inputValue = input.value
    console.log(inputValue.length)
    if (inputValue.length >= 1) {
        // creating li and button elements
        listItem = document.createElement('li');
        deleteButton = document.createElement('button');
        // adding those elements to the correct place
        list.appendChild(listItem);
        list.appendChild(deleteButton);
        
        // taking the string that is passed in and adding it to the <li>
        listItem.textContent = `${input.value}`;
        
        // delete button
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`)
        deleteButton.addEventListener('click', deleteChapter => {
            document.querySelector('.list button').remove();
            document.querySelector('.list li').remove();
            input.focus();
        });
        // setting input back to nothing
        input.value = null;
        input.focus();
    }
    
}



// when button is clicked it will add the string input into the list
button.addEventListener('click', addChapter);

