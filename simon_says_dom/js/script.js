// html selector
const countdownEl = document.querySelector('#countdown');
const instructionsEl = document.querySelector('#instructions');
const numbersListEl = document.querySelector('#numbers-list');
const answersFormEl = document.querySelector('#answers-form');
const messageEl = document.querySelector('#message');
document.getElementsByClassName('form-control').multiple = true;
const formControlEl = document.getElementsByClassName('form-control');

// variable declaration
let userNumbersList = [];
const instructions = "";
const message = "";
const numberMin = 1;
const numberMax = 50;
const numbersListLength = 5;
let countdownTimes = 3;

// generate list of number
const numbersList = numbersArrayGeneration(numberMin, numberMax, numbersListLength);
console.log(numbersList);

// generate list Elemento
const randomNumbersListEl = generateRandomNumbersListEl(numbersList);
console.log(randomNumbersListEl);

// display list Element
numbersListEl.innerHTML = randomNumbersListEl;

// stampo il conto alla rovesci
countdownEl.innerText = countdownTimes;

// faccio partire il conto e stampare ogni secondo il tempo rimanente
const countdown = setInterval(() => {

    countdownEl.innerText = --countdownTimes;
    if (countdownTimes === 0) {
        clearInterval(countdown);
        numbersListEl.classList.toggle('d-none');
        answersFormEl.classList.toggle('d-none');
    }

}, 1000);

//guardo cosa ha scritto l'utente
answersFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(formControlEl);

    // popolo la lista dei numeri scritti dall'utente
    userNumbersList = createListUserNumber(formControlEl)
    console.log(userNumbersList);


})
