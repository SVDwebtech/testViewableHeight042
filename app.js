// alert("Hello World!");
// console.log("Hello World");

//variables
const windowHeightValueBox = document.querySelector('.windowHeightNum');
const bodyHeightValueBox = document.querySelector('.bodyHeightNum');
const body = document.querySelector('body');
const h1 = document.querySelector('.primaryHeading');

window.addEventListener('resize', function () {
    body.style.backgroundColor = "brown";
    body.style.minHeight = `${window.innerHeight - 34}px`;
    h1.textContent = "ViewableHeight after refresh";
    
});


