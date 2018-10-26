/* globals words */
/* exported randomWord, wordGame */
/* eslint no-console: "off" */
'use strict';


/*
var selectedWord;
var wordLength;
var checkWin;
var guessNum;
var guessedLetter;
var guesses; -- Pulled from id="guessed-letters"
var response; -- Pulled from id="game-response"
var guessRemaining; -- Pulled from id="guesses-remaining"
*/

function wordGame() {
    randomWord();
}

/* RANDOM WORD GENERATOR - Selects the word from the array with that index and store in a `word` variable for use by the guess function (`word`) will need to be scoped in way guess function can read. */
function randomWord() {
    //The maximum is exclusive and the minimum (0) is inclusive
    var index = Math.floor(Math.random() * words.length); 
    console.log('selected index', index);
    var selectedWord = words[index];
    console.log('selected word', selectedWord);
    // var selectedWordLength = selectedWord.length;
    // var display = substring.selectedWord(0,)

    for(var i = 0; i < 13; i++) {
        document.getElementById('letter-' + i).textContent = ' ';
    }
    
    /* Set the visibility on the letters of the "Word to Guess" to hidden and fully hide (no line blank) any unused letter spaces. (You might not hide them initially during development so you can "see" that word is loading correctly. Otherwise, you will need to inspect with the Dev Tools) */
    for(var j = 0; j < selectedWord.length; j++) {
        // Grab span by id
        var span = document.getElementById('letter-' + j);
        // Change text content of the span
        // span.textContent = selectedWord[i];
        // console.log('selected word letter ', selectedWord[i]);
        span.textContent = '_';
    }

    
}








// CREATE A 'GUESS' FUNCTION THAT:

    // Is called by the submit of the Guess Letter form




    /* Reads the letter from the Guess Letter input (either use form.elements, or directly reference the letter input by Id, as that is the only form control we care about). */




    /* If letter guess is not a-z or A-Z, alert or message (via results output) user that letter is required. (Hint: you can use `.charCodeAt(0)` on your string value, or checkout regular expressions) */




    /* Checks against letters already guessed and alerts or messages user that letter has already been guessed */




    // Otherwise:
    //     1. Letter is added to guessed letters
    //     1. Guess count is incremented
    //     1. Guess Letter input is reset to ''
    //     1. If word includes the letter (hint: string has an `includes` method):
    //         1. Letter(s) are revealed in Word to Guess
    //         1. Check for win condition (every letter of word is in guessed letters)
    //     1. If word does not include the letter:
    //         1. Add a body part to the gallows
    //         1. Check for lose condition (guesses count is max number of body parts)
    //     1. If win or lose condition:
    //         1. Message the user that they won or ~~died~~ lost
    //         1. Disable the Guess Letter button (button.disabled = true)
    // 1. Call 'loadWord()` to start things