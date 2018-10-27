/* exported loadWord handleGuess */
/* eslint-disable no-console */

var words = ['cheese', 'coffee', 'park', 'flower', 'book', 'sky', 'courier', 'soup', 'water', 'greenery', 'spoon', 'school', 'lab', 'shade', 'window']; 
var wordArray = [];
var letterDisplay = document.getElementById('blank-spaces');
var input = document.getElementById('guess');
var image = document.getElementById('gallows');
var incorrectLetters = document.getElementById('letters-guessed');
var guessNumber = document.getElementById('number-of-guesses');
var gameResult = document.getElementById('win-lose');
//load word randomly

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
    console.log(wordArray);
    
    console.log('word is ', selectedWord);
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

loadWord();

function handleGuess() {
    var guessedLetter = input.value.toLowerCase();
    console.log('letter guessed was', guessedLetter);
        
    var wrongLetters = [];    
    var letterInWord = false; 
    
    
    
    for(var i = 0; i < wordArray.length; i++) {
        if(guessedLetter === wordArray[i]) {
            console.log('match');
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
            input.value = ' ';
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
            }
            input.value = ' ';
            if(wrongTries === 6) {
                gameResult.textContent = 'You lose!';
            }
        }
    }
    console.log(correctGuess);
    if(correctGuess === wordArray.length) {
        gameResult.textContent = 'You win!';
    }
}
