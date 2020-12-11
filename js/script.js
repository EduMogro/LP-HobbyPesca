// Function expression to select elements
const selectElement = (s) => document.querySelector(s);

// Open the Menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});
// CLose the Menu on click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

$('.counter').counterUp({
    delay: 10,
    time: 2000
});