const list = document.querySelector('.list');

const input = document.querySelector('#favchap');

const submitButton = document.querySelector('#submit');

function addChapter () {
    inputValue = input.value;

    if (inputValue.length >= 1) {
        // creating necessary items
        listItem = document.createElement('li');
        deleteButton = document.createElement('button');

        // adding elements to the list
        list.appendChild(listItem);
        list.appendChild(deleteButton);

        // adding the correct value to the list
        listItem.textContent = `${input.value}`;

        // delete button
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        deleteButton.addEventListener('click', deleteChapter => {
            
            document.querySelector('.list button').remove();
            document.querySelector('.list li').remove();
            input.focus();
        });

        input.value = null;
        input.focus(); 
    }

    
};

submitButton.addEventListener('click', addChapter);