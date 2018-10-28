/* exported handleGuess loadWord */
/* eslint-disable no-console */

var words = ['cheese', 'coffee', 'park', 'flower', 'book', 'sky', 'courier', 'soup', 'water', 'greenery', 'spoon', 'school', 'lab', 'shade', 'window']; 

var letterDisplay = document.getElementById('blank-spaces');
var input = document.getElementById('guess');
var image = document.getElementById('gallows');
var incorrectLetters = document.getElementById('letters-guessed');
var guessNumber = document.getElementById('number-of-guesses');
var gameResult = document.getElementById('win-lose');

var wordArray = [];
var blanks = [];
var blankJoin;
var wrongTries = 0;
var correctGuess = 0;

function loadWord() {
    var copy = words.slice();
    var index = Math.floor(Math.random() * 14);
    var selectedWord = getRandomWord();
    var letters = selectedWord.split('');
    wordArray = letters;

    function getRandomWord() {
        var word = copy[index];
        copy.slice(index, 1);
        return word;
    }
    for(var i = 0; i < letters.length; i++) {
        blanks.push('_');
    }
    blankJoin = blanks.join(' ');
    letterDisplay.textContent = blankJoin; 
}

function handleGuess() {
    var guessedLetter = input.value.toLowerCase();  
    var wrongLetters = [];    
    var letterInWord = false; 
    
    for(var i = 0; i < wordArray.length; i++) {
        if(guessedLetter === wordArray[i]) {
            letterInWord = true;
            correctGuess += (wordArray.length - (wordArray.length - 1));
        }
        if(letterInWord) {
            for(var k = 0; k < wordArray.length; k++) {
                if(guessedLetter === wordArray[k]) {
                    blanks[k] = guessedLetter;
                }
            }
            var display = blanks.join(' ');
            letterDisplay.textContent = display;
            input.value = '';
        }
        else {
            if(i === (wordArray.length - 1)) {
                wrongLetters.push(guessedLetter);
                var tryIncrease = true;
                if(tryIncrease === true) {
                    if(i === (wordArray.length - 1)) {
                        wrongTries += 1;
                        var guessesLeft = 7 - wrongTries;
                        guessNumber.textContent = ' ' + guessesLeft + ' ';
                    }  
                }
                var imageNumber = wrongTries + 1;
                incorrectLetters.textContent += (wrongLetters + ' '); 
                image.src = 'pic' + imageNumber + '.png';
                input.value = '';
            }
        }
    }
    if(correctGuess === wordArray.length) {
        gameResult.textContent = 'You win!';
    }
    else if(wrongTries === 6) {
        gameResult.textContent = 'You lose!';
    }
}

loadWord();


