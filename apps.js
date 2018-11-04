/* exported clickButton */
var winLoseContainer = document.getElementById('win-lose-container');
var guessLettersForm = document.getElementById('guess-letters');
let guessedLetterDisplay = document.getElementById('letter-container');
let wrongLetterDisplay = document.getElementById('guessed-display');

var wordList = ['heart', 'puppy', 'kitten', 'octopus', 'platypus', 'diamond', 'gold', 'river'];
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
var wordLength = randomWord.length;
var randomWordArray = randomWord.split('');
var displayGuesses = [];
var guessCount = 0;
var gameIsDone = false;
let image = document.getElementById('gallows');
let wrongLetters = [];




for(var i = 0; i < wordLength; i++) {
    displayGuesses.push('_');
}

function getGuess() {
    var elements = guessLettersForm.elements;
    var guess = elements.textinput.value;
    return guess;
}

function arrayContainsGuessedLetter(guess) {
    var letterIsInWord = false;
    letterIsInWord = (randomWordArray.indexOf(guess) > -1);
    return letterIsInWord;
}

function getAllIndexes(array, value) {
    var indexes = []; 
    for(var i = 0; i < array.length; i++) {
        if(array[i] === value) {
            indexes.push(i);
        }
    }
    return indexes;
}

function checkGuess(guessedLetter) {
    var letterIsInWord = arrayContainsGuessedLetter(guessedLetter);
    if(letterIsInWord === true){
        var letterLocations = getAllIndexes(randomWordArray, guessedLetter);
        for(var i = 0; i < letterLocations.length; i++) {
            displayGuesses[letterLocations[i]] = guessedLetter;
            guessedLetterDisplay.textContent = displayGuesses;
            guessedLetterDisplay.textContent = displayGuesses.join(' ');
        }
        if(randomWordArray.toString() === displayGuesses.toString()) {
            gameIsDone = true;
            winLoseContainer.textContent = 'You win!';
        }
    }
    if(letterIsInWord === false) {
        wrongLetters.push(guessedLetter);
        wrongLetterDisplay.textContent = wrongLetters.join(' ');
        guessCount = guessCount + 1;
        image.src = './hangman-images/' + guessCount + '.jpg';
        if(guessCount === 6) {
            gameIsDone = true;
            winLoseContainer.textContent = 'You lose!';
        }
    }
} 




guessedLetterDisplay.textContent = displayGuesses.join(' ');
wrongLetterDisplay.textContent = ' ';

// eslint-disable-next-line no-unused-vars
function clickButton() {
    if(gameIsDone === false) {
        var guess = getGuess();
        checkGuess(guess);
    }
}
