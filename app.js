/* globals words */
/* globals imageSources */
/* exported play */

'use strict';


var word;
var inputBox = document.getElementById('guessLetter');
var correctGuesses = document.getElementById('correctGuesses');
var lettersGuessed = document.getElementById('lettersGuessed');
var message = document.getElementById('message');
var gallows = document.getElementById('image');
var goButton = document.getElementById('goButton');
var guessCount;
var correctGuessCount;
var letters;
var dashes;

reset();

function reset() {
    var randomMax = words.length - 1;
    word = words[Math.floor(Math.random() * randomMax)].toUpperCase();
    // console.log(word);
    guessCount = 0;
    correctGuessCount = 0;
    dashes = ['___'];
    letters = '';
    
    for(var i = 0; i < word.length - 1; i++){
        dashes.push('___');
    }
    
    correctGuesses.innerHTML = dashes.join(' ');
    gallows.innerHTML = '<img id="gallows" src="0gallows.jpg">';
    message.innerHTML = '';
    lettersGuessed.innerHTML = '';
    inputBox.value = '';
    goButton.innerHTML = '<button class="go green" onclick="event.preventDefault(); play()">Go!</button>';
}

function play() {
    var input = inputBox.value.toUpperCase();
    var msg = '';
    if(guessCount < 6) {
        if(letters.includes(input) && input !== '') {
            msg = '<p class="blue">You already guessed that letter. Try again!</p>';
        } else if(word.includes(input) && input !== ''){
            letters += '     ' + input;
            for(var j = 0; j < word.length; j++) {
                if(input === word[j]) {
                    dashes[j] = input;
                    correctGuessCount++;
                }       
            }
            msg = '<p class="blue">Correct!</p>';
        } else {
            letters += '     ' + input;
            gallows.innerHTML = imageSources[guessCount];
            msg = '<p class="blue">Guess Again</p>';
            guessCount++;
            // console.log(guessCount);
        }
    
        correctGuesses.innerHTML = dashes.join(' ');
        message.innerHTML = msg;
        lettersGuessed.innerHTML = letters;

        if(correctGuessCount === word.length) {
            goButton.innerHTML = '<button class="go green" onclick="reset()">You Win! - New Game</button>';
        } 
    } 
    
    if(guessCount >= 6){
        gallows.innerHTML = imageSources[imageSources.length - 1];
        goButton.innerHTML = '<button class="go red" onclick="reset()">You Lose! - New Game</button>';
        message.innerHTML = '<p class="blue">The word is ' + word + '</p>';
    }
}