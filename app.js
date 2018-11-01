import words from './words.js';

var lettersLong = document.getElementById('word-length');
var blanksList = document.getElementById('empty-blanks');
var correctGuesses = document.getElementById('guessed-correctly');
var newBlanksList = document.getElementById('new-blanks');
var tryAgain = document.getElementById('try-again');
var incorrectGuesses = document.getElementById('incorrect-guesses');
var nextGuess = document.getElementById('next-guess');
var gameOver = document.getElementById('game-over');
var used = document.getElementById('used');

function randFunc() {
    var rand = words[Math.floor(Math.random() * words.length)].split('');
    return rand;

}
var rand = randFunc();

function tryRandomWord() {
    rand = randFunc();
    var emptyBlanks = [];
    var wordLength = rand.length;
    for(var i = 0; i < wordLength; i++) {
        emptyBlanks.push(' __');
    }  
    lettersLong.textContent = 'your word is ' + wordLength + ' letters long';
    blanksList.textContent = emptyBlanks;
    return emptyBlanks;
}
var blanks = tryRandomWord();
var usedLetters = [];
var wrongGuesses = 0;

//eslint-disable-next-line
function enterGuess() {
    var guessInputs = document.getElementById('userGuess').value.toLowerCase();

    if(usedLetters.includes(guessInputs)) {
        alert('Letter already used!');
    }

    else if(rand.includes(guessInputs)) {
        blanks.splice(rand.indexOf(guessInputs), 1, guessInputs);
        correctGuesses.textContent = 'you guessed correctly!';
        newBlanksList.textContent = '  ' + blanks + '  ';
        nextGuess.textContent = 'Enter your next guess in the "Guess a letter" box above';
        usedLetters.push(guessInputs);

    } else if(wrongGuesses < 6) {
        //eslint-disable-next-line
        tryAgain.textContent = "That letter isn't in this word:(";
        wrongGuesses++;
        incorrectGuesses.textContent = 'Number of incorrect guesses: ' + wrongGuesses;
        var gallows = document.getElementById('firstMan');
        var drawStick = ['Images/StickMan0.png', 'Images/StickMan1.png', 'Images/StickMan2.png', 'Images/StickMan3.png', 'Images/StickMan4.png', 'Images/StickMan5.png', 'Images/StickMan6.png'];
        gallows.src = drawStick[wrongGuesses];
        usedLetters.push(guessInputs);

    } 
    if(wrongGuesses >= 6) {
        gameOver.textContent = 'GAME OVER!!!';
    }
    
    used.textContent = usedLetters;
}


    













