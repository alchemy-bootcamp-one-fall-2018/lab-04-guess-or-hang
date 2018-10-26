/* globals words */
/* exported play */

'use strict';

// function to launch onclick that compares input to word
function play() {
    var randomMax = words.length - 1;
    var word = words[Math.floor(Math.random() * randomMax)];
    var input = document.getElementById('guessLetter').value;
    console.log(word);
    var guessCount = 0;
    var correctGuesses = [];

    while(guessCount < 6) {
        
        if(word.includes(input)) {
            //add input to correctGuesses array
            //place input in correct spot of correctGuesses
            //send message to message
            //Give letter class of correctBlock
        } else {
            guessCount++;
            //place input in incorrectGuesses and 
            //send message to message
            // if incorrect, add body part to person
        }
        if(correctGuesses.length === word.length) {
            //button displays "You Win! - New Game". Reset game
        } 
    }
    
    // change button to a restart, button becomes "You Lose - New Game". Display "The word was --".
}

//more vertical spacing for desktop version
