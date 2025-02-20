// html selector
const countdownEl = document.querySelector('#countdown');
const instructionsEl = document.querySelector('#instructions');
const numbersListEl = document.querySelector('#numbers-list');
const answersFormEl = document.querySelector('#answers-form');
const messageEl = document.querySelector('#message');

// variable declaration
const userNumbersList = [];
const instructions = "";
const message = "";
const numberMin = 1;
const numberMax = 50;
const numbersListLength = 5;

// generate list of number
const numbersList = numbersArrayGeneration(numberMin, numberMax, numbersListLength);
console.log(numbersList);

// generate list Elemento
const userNumbersListEl = generateUserNumbersListEl(numbersList);
console.log(userNumbersListEl);

// display list Element
numbersListEl.innerHTML = userNumbersListEl;

