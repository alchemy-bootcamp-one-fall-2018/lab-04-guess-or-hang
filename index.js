/* globals words */
/* exported play */

'use strict';

// function to launch onclick that compares input to word
function play() {
    var randomMax = words.length - 1;
    var word = words[Math.floor(Math.random() * randomMax)];
    var input = document.getElementById('guessLetter').value;
    console.log(word, word[0]);
    var guessCount = 0;

    while(guessCount < 6) {
        
        if(word.includes(input)) {
         //place input in correct spot of correctGuesses
         //send message to message
        } else {
            guessCount++;
            //place input in incorrectGuesses and 
            //send message to message
            // if incorrect, add body part to person
        }
    }
    

    // if number of incorrectGuesses === 6, end game and change button to a restart. Display word.
    // if full word is guessed, button displays "You Win! New Game". Reset game
    // adjust field boxes to adjust only so far when screen stretched.
}
