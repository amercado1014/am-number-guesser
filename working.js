var numberGuess = document.querySelector('.number-guess');

var guessButton = document.querySelector('.guess');

var clearButton = document.querySelector('.clear');

var resetButton = document.querySelector('.reset');

var lastGuess = document.querySelector('.last-guess');

var recentGuess = document.querySelector('.recent-guess');

var results = document.querySelector('.results');

var randomNumber = resetFunction ();

guessButton.addEventListener('click', function() {
  recentGuess.innerText = numberGuess.value;
  var guess = parseInt(numberGuess.value, 10);
  if (guess < randomNumber) {
      results.innerText = 'That is too low';
    } else if (guess > randomNumber) {
      results.innerText = 'That is too high';
    } else if (guess === randomNumber) {
      results.innerText = 'BOOM!';
    } else {
      results.innerText = 'Enter a number';
    }
});

clearButton.addEventListener('click', function() {
  numberGuess.value = null;
});

resetButton.addEventListener('click', function () {
  randomNumber = resetFunction();
});

function resetFunction () {
  recentGuess.innerText = '#';
  results.innerText = 'Guess a number between 1 and 100';
  numberGuess.value = null;
  var newNumber = Math.floor(Math.random() * 100);
  console.log(newNumber);
  return newNumber;
};