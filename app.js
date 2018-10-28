/* globals words */
/* exported randomWord, wordGame */
/* eslint no-console: "off" */
'use strict';

/*  List of Variables to Used
var guessNumber = 6;
var guessedLetter = '';
var guesses = document.getElementById('guessed-letters');
var response = document.getElementById('game-end-response');
var guessesRemaining = document.getElementById('guesses-remaining'); 
var selectedWord;
var checkWin;

*/

//  Global Variables

var selectedWord;


function randomWord() {
    //The maximum is exclusive and the minimum (0) is inclusive
    var index = Math.floor(Math.random() * words.length); 
    console.log('selected index', index);
    var selectedWord = words[index];
    console.log('selected word', selectedWord);
    return words[index];
}




function wordGame() {
 

    // get random word from words array
    selectedWord = randomWord();
    console.log(selectedWord);

    // Hide word and display '_' for each letter on page
    for(var i = 0; i < selectedWord.length; i++) {
        // Grab span by id
        var span = document.getElementById('letter-' + i);
        // Change text content of the span
        // span.textContent = selectedWord[i];
        console.log('selected word letter ', selectedWord[i]);
        span.textContent = '_';
             

    }
}