/* globals words */
/* globals imageSources */
/* exported play */

'use strict';

//change button back to go on reset
//reset to first image
//reset message
//reset lettersGuessed
//game does not end after correct

var word;
var correctGuesses = document.getElementById('correctGuesses');
var lettersGuessed = document.getElementById('lettersGuessed');
var guessCount;
var correctGuessCount;
var letters;
var dashes;

reset();

//put this in a function to call it once on page load, and on New Game button click.
function reset() {
    var randomMax = words.length - 1;
    word = words[Math.floor(Math.random() * randomMax)].toUpperCase();
    console.log(word);
    guessCount = 0;
    correctGuessCount = 0;
    dashes = ['___'];
    letters = '';

    
    for(var i = 0; i < word.length - 1; i++){
        dashes.push('___');
    }
    
    correctGuesses.innerHTML = dashes.join(' ');
}

function play() {
    var input = document.getElementById('guessLetter').value.toUpperCase();
    var message = document.getElementById('message');
    var gallows = document.getElementById('image');
    var goButton = document.getElementById('goButton');
    
    //clear text input
    if(guessCount < 5) {
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
        if(correctGuessCount === word.length - 1) {
            goButton.innerHTML = '<button class="go green" onclick="reset()">You Win! - New Game</button>';
        } 
    } else {
        gallows.innerHTML = imageSources[5];
        goButton.innerHTML = '<button class="go red" onclick="reset()">You Lose! - New Game</button>';
        message.textContent = 'The word is ' + word;
    }
    
}

var g = document.getElementById('gallows');
g.innerHTML = '<img id="gallows" src="1gallows.jpg">';

//fix empty input 'Correct!' message 