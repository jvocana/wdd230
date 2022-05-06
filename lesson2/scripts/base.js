// gets current year
const d = new Date();


// variables to be put in the footer
const year = d.getFullYear();

const authorName = 'Jaxon Vocana';

let footerContent = `&copy ${year} | ${authorName} | Last Updated: ${document.lastModified}`;

// adding the formatted string to the document
document.querySelector('footer').innerHTML = footerContent;