/* globals words */
/* globals imageSources */
/* exported play */

'use strict';

//put this in a function to call it once on page load, and on New Game button click.
var randomMax = words.length - 1;
var word = words[Math.floor(Math.random() * randomMax)].toUpperCase();
console.log(word);
var guessCount = 0;
var correctGuessCount = 0;
var dashes = ['___'];
var correctGuesses = document.getElementById('correctGuesses');
var lettersGuessed = document.getElementById('lettersGuessed');
var letters = '';

for(var i = 0; i < word.length - 1; i++){
    dashes.push('___');
}

correctGuesses.innerHTML = dashes.join(' ');

function play() {
    var input = document.getElementById('guessLetter').value.toUpperCase();
    var message = document.getElementById('message');
    var gallows = document.getElementById('image');
    var goButton = document.getElementById('goButton');
    
    //clear text input
    if(guessCount < 6) {
        letters += '     ' + input;
        lettersGuessed.innerHTML = letters;

        if(word.includes(input)) {
            correctGuessCount++;
            for(var j = 0; j < word.length; j++) {
                if(input === word[j]) {
                    dashes[j] = input;
                }
            }
           
            correctGuesses.innerHTML = dashes.join(' ');
            message.innerHTML = '<p class="green">Correct!</p>';

        } else {
            gallows.innerHTML = imageSources[guessCount];
            guessCount++;
            message.innerHTML = '<p class="red">Guess Again</p>';
        }
        if(correctGuessCount === word.length) {
            console.log("reached end");
            //button displays "You Win! - New Game". Reset game
            goButton.innerHTML = '<button class="go green" onclick="reset()">You Win! - New Game</button>';
        } 
    } else {
        // change button to a restart, button becomes "You Lose - New Game". Display "The word was --".
    }
    
}

var g = document.getElementById('gallows');
g.innerHTML = '<img id="gallows" src="1gallows.jpg">';

//fix empty input 'Correct!' message 