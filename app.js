// alert("Hello World!");
// console.log("Hello World");

//variables
const windowHeightValueBox = document.querySelector('.windowHeightNum');
const bodyHeightValueBox = document.querySelector('.bodyHeightNum');
const body = document.querySelector('body');

let windowHeightValue = window.innerHeight;
let bodyHeightValue = body.offsetHeight;


windowHeightValueBox.textContent = `${windowHeightValue}px`;
bodyHeightValueBox.textContent = `${bodyHeightValue}px`;

window.addEventListener('resize', function(){
    windowHeightValue = window.innerHeight;
    bodyHeightValue = body.offsetHeight;

    windowHeightValueBox.textContent = `${windowHeightValue}px`;
    bodyHeightValueBox.textContent = `${bodyHeightValue}px`;


});

