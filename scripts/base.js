// gets current year
const d = new Date();


// variables to be put in the footer
const year = d.getFullYear();

const authorName = 'Jaxon Vocana';

const state = 'Utah';

// gets the last time the document was modified
const lastModified = new Date(document.lastModified);


let footerContent = `<p>&copy ${year} | ${authorName} | ${state}</p>
<p id='lastModified'>Last Updated: ${lastModified}</p>`;

// adding the formatted string to the document
document.querySelector('#footercontent').innerHTML = footerContent;