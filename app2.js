/* global words drawBody */
/* eslint no-console: "off" */
/* exported canvas loadWord guess drawPerson refreshPage */

var word = words[Math.floor(Math.random() * words.length)]; // get a random word from array
console.log(word);

// global variables
var x;
var guessArray = []; // create an empty array to house the letter guesses / guessArray = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
var count = 0;    // total guesses made
var correct = 0;    // total correct guesses made
// var incorrect = 0;
var canvas = document.getElementById('canvas');

// fill empty array with underscrores times the length of random word
function loadWord() {
    for(var i = 0; i < word.length; i++) {
        guessArray[i] = '_';
    }
    x = guessArray.join(' ');               // x = "_ _ _ _ _ _ _ _ _ _"
    document.getElementById('guess').innerHTML = x;
}

// keep track of total guesses
function keepCount() {
    count++;
    document.getElementById('total-count').innerHTML = 'Total guesses made: ' + count;
}


// Guess a letter
function guess() {
    var letter = document.getElementById('letter').value;  // letter guessed
    highlightInput();

    if(letter.length > 0) {
        for(var i = 0; i < word.length; i ++) {
            if(word[i] === letter) {
                guessArray[i] = letter;
                correct++;
                document.getElementById('total-correct-count').innerHTML = 'Total correct letters guessed: ' + correct;
            }
        }
        document.getElementById('guess').innerHTML = guessArray.join(' '); // display correct letters
        keepCount();
        document.getElementById('letter').value = '';
    }

    if(count === 6) {
        document.getElementById('reset-button').classList.remove('hidden');
        document.getElementById('guess-button').disabled = true;
        document.getElementById('reset-button').focus();
        document.getElementById('result').innerHTML = 'You lost!';

        drawBody();
    }
}



// highlight the guess letter text input
function highlightInput() {
    document.getElementById('letter').focus();
}

// play again button reloads the page
function refreshPage() {
    window.location.reload();
    highlightInput();
}