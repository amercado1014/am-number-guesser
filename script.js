var numberGuess = document.querySelector('.number-guess');
var lastGuess = document.querySelector('.last-guess');
var recentGuess = document.querySelector('.recent-guess');
var results = document.querySelector('.results');
var guessButton = document.querySelector('.guess');
var clearButton = document.querySelector('.clear');
var resetButton = document.querySelector('.reset');
var minInput = document.getElementById('min');
var maxInput = document.getElementById('max');
var minText = document.getElementById('min-text');
var maxText = document.getElementById('max-text');
var submitButton = document.getElementById('submit');
var min = parseInt(document.getElementById('min').value) || 1;
var max = parseInt(document.getElementById('max').value) || 100;
var randomNumber = generateRandomNumber();
  console.log(randomNumber)

 
 guessButton.addEventListener('click', function(event) {
  event.preventDefault();
  enableResetButton(event);
  runGame();
  clearFields(); 
});

clearButton.addEventListener('click', function(event) {
  event.preventDefault();
  clearFields();
  clearButton.disabled = true;
  guessButton.disabled = true;
});

resetButton.addEventListener('click', function () {
  lastGuess.innerText = '';
  recentGuess.innerText = '';
  results.innerText = 'Guess a number between 1 and 100';
  results.style.color = 'black';
  numberGuess.value = '';
  randomNumber = generateRandomNumber();
  console.log(randomNumber);
  disableButtons();
});

numberGuess.addEventListener('keyup', function(event) {
  event.preventDefault();
  document.getElementById('clear').removeAttribute('disabled');
  document.getElementById('guess').removeAttribute('disabled');
});
 
minInput.addEventListener('keyup', function() {
  submitButton.disabled = false;
  clearButton.disabled = false;
});

maxInput.addEventListener('keyup', function(){
  submitButton.disabled = false;
});

submitButton.addEventListener('click', function(event){
  event.preventDefault();
  lastGuess.innerText = '';
  recentGuess.innerText = '';
  setRange();
  clearFields();
  enableResetButton();
});

function generateRandomNumber() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function enableResetButton () {
  document.getElementById('reset').removeAttribute('disabled')
 };

function runGame() {
  recentGuess.innerText = numberGuess.value;
  var guess = parseInt(numberGuess.value);
  if (guess < randomNumber && guess > min) {
      lastGuess.innerText = 'Your last guess was';
      results.innerText = 'That is too low';
      results.style.color = 'black';
    } else if (guess > randomNumber && guess < max) {
      lastGuess.innerText = 'Your last guess was';
      results.innerText = 'That is too high';
      results.style.color = 'black';
    } else if (guess === randomNumber) {
      lastGuess.innerText = 'BOOM!';
      lastGuess.style.color = 'red';
      recentGuess.innerText = '';
      setWinningRange();
    } else if (isNaN(guess) === true) {
      lastGuess.innerText = '';
      recentGuess.innerText = '';
      results.innerText = ' Error: Enter a number';
      results.style.color = 'red';
    } else if (guess > max || guess < min){
      lastGuess.innerText = '';
      recentGuess.innerText = '';
      results.innerText = 'Error: Enter a number between ' + min + ' and ' + max;
      results.style.color = 'red';
    } else {
      results.innerText = 'Error: Enter a number';
      results.style.color = 'red';
    } 
    clearButton.disabled = true;
    submitButton.disabled = true;
    guessButton.disabled = true; 
};

function setRange() {
  min = parseInt(minInput.value);
  max = parseInt(maxInput.value);
  randomNumber = generateRandomNumber();
  console.log(randomNumber)
  results.innerText = 'Guess a number between ' +min+ ' and ' +max;
  results.style.color = 'black';
};

function clearFields() {
  numberGuess.value = '';
  minInput.value = '';
  maxInput.value = '';
};

function disableButtons() {
  clearButton.disabled = true
  submitButton.disabled = true
  resetButton.disabled = true
  guessButton.disabled = true
};

function setWinningRange() {
  min = (min - 10)
  max = (max + 10)
  randomNumber = generateRandomNumber();
  console.log(randomNumber);
  results.innerText = 'Guess a number between ' +min+ ' and ' +max;
}