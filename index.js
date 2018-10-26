/* globals words */
/* exported play */

'use strict';

var randomMax = words.length - 1;
var word = words[Math.floor(Math.random() * randomMax)].toLowerCase();
console.log(word);

// var c = document.getElementById('correctGuesses');
// var x = '<div class="correctBlock"> H </div>';
// //x.classList.add('correctBlock');
// c.innerHTML = x;

// function to launch onclick that compares input to word
function play() {
    var input = document.getElementById('guessLetter').value;
    console.log(input);
    var guessCount = 0;
    var correctLetter = [];
    var correctGuesses = document.getElementById('correctGuesses');
    //clear text input

    while(guessCount < 6) {
        
        if(word.includes(input)) {
            //add input to correctLetter array
            correctLetter.push(input);
            input.classList.add('correctBlock');
            correctGuesses.textContent = input;

            //place input in correct spot of correctLetter
            //send message to message
            //Give letter class of correctBlock
        } else {
            guessCount++;
            //place input in incorrectLetter and 
            //send message to message
            // if incorrect, add body part to person
        }
        if(correctLetter.length === word.length) {
            //button displays "You Win! - New Game". Reset game
        } 
    }
    
    // change button to a restart, button becomes "You Lose - New Game". Display "The word was --".
}

//more vertical spacing for desktop version
