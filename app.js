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
    guessCount = 1;
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
    if(guessCount < 6) {
        letters += '     ' + input;
        lettersGuessed.innerHTML = letters;

        if(word.includes(input) && input !== '') {
            for(var j = 0; j < word.length; j++) {
                if(input === word[j]) {
                    dashes[j] = input;
                    correctGuessCount++;
                }
            }
           
            correctGuesses.innerHTML = dashes.join(' ');
            message.innerHTML = '<p class="blue">Correct!</p>';
            
        } else {
            gallows.innerHTML = imageSources[guessCount - 1];
            guessCount++;
            message.innerHTML = '<p class="blue">Guess Again</p>';
        }
        if(correctGuessCount === word.length) {
            goButton.innerHTML = '<button class="go green" onclick="reset()">You Win! - New Game</button>';
        } 
    } else {
        gallows.innerHTML = imageSources[5];
        goButton.innerHTML = '<button class="go red" onclick="reset()">You Lose! - New Game</button>';
        message.innerHTML = '<p class="blue">The word is ' + word + '</p>';
    }
    
}

var g = document.getElementById('gallows');
g.innerHTML = '<img id="gallows" src="1gallows.jpg">';