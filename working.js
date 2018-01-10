var randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber)
  
var numberGuess = document.querySelector('.number-guess');

var lastGuess = document.querySelector('.last-guess');

var recentGuess = document.querySelector('.recent-guess');

var results = document.querySelector('.results');

var guessButton = document.querySelector('.guess');

var minInput = document.getElementById('min');

var maxInput = document.getElementById('max');

var minText = document.getElementById('min-text');

var maxText = document.getElementById('max-text');

var submitButton = document.getElementById('submit');

var min = 1

var max = 100

guessButton.addEventListener('click', function(event) {
  event.preventDefault();
  recentGuess.innerText = numberGuess.value;
  lastGuess.innerText = 'Your last guess was';
  enableResetButton(event);
  var guess = parseInt(numberGuess.value);
  if (guess < randomNumber && guess > min) {
      results.innerText = 'That is too low';
    } else if (guess > randomNumber && guess < max) {
      results.innerText = 'That is too high';
    } else if (guess === randomNumber) {
      results.innerText = 'BOOM!';
    } else if (isNaN(guess) === true) {
      results.innerText = ' Error Enter a number';
      recentGuess.innerText = '';
      lastGuess.innerText = '';
    } else if (guess > max || guess < min){
      results.innerText = 'Enter a number between ' +min+ ' and ' +max;
      recentGuess.innerText = '';
      lastGuess.innerText = '';
    }
      else {
      results.innerText = 'Error Enter a number';
    }
});

var clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', function(event) {
  event.preventDefault();
  numberGuess.value = '';
  minInput.value = '';
  maxInput.value = '';
  clearButton.disabled = true;
});

var resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', function () {
  recentGuess.innerText = 'Enter a number between' +min+ 'and' +max;
  event.preventDefault();
  lastGuess.innerText = '';
  recentGuess.innerText = '';
  results.innerText = 'Guess a number between 1 and 100';
  numberGuess.value = '';
  randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
});

 numberGuess.addEventListener('keyup', function(event) {
  event.preventDefault();
  document.getElementById('clear').removeAttribute('disabled');
  document.getElementById('guess').removeAttribute('disabled');
});

 function enableResetButton (event) {
  event.preventDefault();
  document.getElementById('reset').removeAttribute('disabled')
 };

minInput.addEventListener('keyup', function() {
 submitButton.disabled = false
});

maxInput.addEventListener('keyup', function(){
  submitButton.disabled = false
});

submitButton.addEventListener('click', function(event){
  event.preventDefault();
  minText.innerText = minInput.value;
  maxText.innerText = maxInput.value;

});








