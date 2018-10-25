/* globals words */
/* exported play */

'use strict';


// function to launch onclick that compares input to word
function play() {
    var input = document.getElementById('guessLetter').value;
    console.log(input);
    // if input is correct, goes to correctGuesses; if incorrect, goes to incorrectGuesses
    // display message "correct" of "guess again"
    // if incorrect, add body part to person
    // if number of incorrectGuesses === 6, end game and change button to a restart. Display word.
    // if full word is guessed, button displays "You Win! New Game". Reset game
}