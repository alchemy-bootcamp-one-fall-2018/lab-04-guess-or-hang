/* global words */
/* exported enterGuess */

var lettersLong = document.getElementById('word-length');
var letterDisplay = document.getElementById('letter-display');
var guessMessage = document.getElementById('guess-message');
var countMessage = document.getElementById('count-message');
var gameOver = document.getElementById('game-over');
var used = document.getElementById('used');
var guessButton = document.getElementById('guessButton');
var gallows = document.getElementById('firstMan');
var images = [
    'Images/StickMan0.png',
    'Images/StickMan1.png',
    'Images/StickMan2.png',
    'Images/StickMan3.png',
    'Images/StickMan4.png',
    'Images/StickMan5.png',
    'Images/StickMan6.png'
];
var letterPlaceholder = [];
var usedLetters = [];
var allowedGuesses = 0;
gallows.src = images[0];

var word = randFunc();
lettersLong.textContent = 'Your word is ' + word.length + ' letters long';

function randFunc() {
    var randomWord = words[Math.floor(Math.random() * words.length)].split('');
    for(let i = 0; i < randomWord.length; i++) {
        letterPlaceholder.push('_');
    }
    return randomWord;
}

function enterGuess() {
    var guessInputs = document.getElementById('userGuess');
    var guess = guessInputs.value.toLowerCase();

    if(usedLetters.includes(guess)) {
        alert('Letter already used!');
    }
    else if(word.includes(guess)) {
        for(let i = 0; i < word.length; i++) {
            if(guess === word[i]) {
                letterPlaceholder[i] = word[i];
            }
            letterDisplay.textContent = '  ' + letterPlaceholder + '  ';
        }
        usedLetters.push(guess);
        guessMessage.textContent = 'Nice guess!';
    }
    else {
        guessMessage.textContent = 'That letter isn\'t in this word:(';
        allowedGuesses++;
        countMessage.textContent = 'Number of guesses remaining: ' + (6 - allowedGuesses);
        gallows.src = images[allowedGuesses];
        usedLetters.push(guess);

    } 
    if(allowedGuesses === 6) {
        gameOver.textContent = 'GAME OVER!!!';
        guessButton.disabled = true;
    }
    if(!letterPlaceholder.includes('_')) {
        guessMessage.textContent = 'You win!';
        countMessage.textContent = '';
        guessButton.disabled = true;
        letterDisplay.textContent = letterPlaceholder.join('').toUpperCase();
    }
    used.textContent = 'Guessed letters: ' + usedLetters;
    guessInputs.value = '';
}
