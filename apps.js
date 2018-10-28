/* exported handleGuess loadWord validate */
/* eslint-disable no-console */
'use strict'; 

var letterDisplay = document.getElementById('blank-spaces');
var input = document.getElementById('guess');
var image = document.getElementById('gallows');
var incorrectLetters = document.getElementById('letters-guessed');
var guessNumber = document.getElementById('number-of-guesses');
var gameResult = document.getElementById('win-lose');
var submitButton = document.getElementById('click');

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

function validate() {
    if(input.value === '') {
        alert('You must input a letter in the box');
        submitButton.disabled = true;
        //wrongTries = wrongTries + 0;
        // wrongInput = true;
    }
    if(input.value.charCodeAt(0)) {
        alert('You must input a letter');
        submitButton.disabled = true;
        //wrongTries = wrongTries + 0;
        // wrongInput = true;
    }
    submitButton.disabled = false;
}
// var wrongInput = false;

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
                // if(wrongInput === true) {
                //     wrongTries = wrongTries + 0;
                // }
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
        submitButton.disabled = true;
    }
    else if(wrongTries === 6) {
        gameResult.textContent = 'You lose!';
        submitButton.disabled = true;

    }
}

loadWord();


