/* exported getUnderscores */
/* exported resetGame */
/* exported checkGuess */
'use strict';

var wrong = document.getElementById('wrongLetters');
var wordPrompt = document.getElementById('wordPrompt');
var userMessage = document.getElementById('userMessage');
var guesses = document.getElementById('guessesLeft');
var letterGuessed = document.getElementById('letter');
var button = document.getElementById('button');

var guessesCount = 0;
var answerArray = [];
var wrongLetter = [' Wrong Letters: '];
var currentImageIndex = -1;
var maxImageIndex = 0;
var images = [];

// eslint-disable-next-line
var randomWord = Math.floor(Math.random() * words.length);
// eslint-disable-next-line
var getWord = words[randomWord];

for(var j = 0; j < getWord.length; j++) {
    answerArray[j] = '_ ';
}
var stringify = answerArray.join(' ');
wordPrompt.innerHTML = stringify;


function checkGuess() {

    var letter = letterGuessed.value;
    
    if(letter.length > 0) {
        for(var i = 0; i < getWord.length; i++) {
            if(getWord[i] === letter) {
                answerArray[i] = letter;
                var answer = true;
                letterGuessed.value = '';
            }
        }
        if(answer !== true) {
            changeImages();
            guessesCount++;
            wrongLetter.push(letter);
            wrong.innerHTML = wrongLetter.join(' ');
            letterGuessed.value = '';
            
            
        }
        guesses.innerHTML = 'Number of incorrect guesses: ' + guessesCount;
        wordPrompt.innerHTML = answerArray.join(' ');
    }
    if(guessesCount > 5) {
        userMessage.innerHTML = 'You lose!';
        button.disabled = true;
    }
    if(answerArray.join('') === getWord) {
        userMessage.innerHTML = 'You Win!';
        button.disabled = true;
    }
}

function setUp() {
    images = document.images;
    maxImageIndex = images.length;
    currentImageIndex = 0;
}

function changeImages() {
    if(currentImageIndex <= maxImageIndex - 1 || currentImageIndex === 0) {
        currentImageIndex = currentImageIndex += 1;
    }
    
    for(var p = 0; p < maxImageIndex; p++) {
        images[p].hidden = (p !== currentImageIndex);
    }
}

window.onload = function() {
    setUp();
    images[currentImageIndex].hidden = false;
};