/* globals words */
/* exported randomWord, wordGame, guessLetter */
/* eslint no-console: "off" */
'use strict';



//  Global Variables

var selectedWord;
var response = document.getElementById('game-response');
var guessedLetter = '';
var selectedState;
var stateLength;
var checkWin;
// var guessNumber = 6;
// var guesses = document.getElementById('guessed-letters');
// var guessesRemaining = document.getElementById('guesses-remaining');



function randomWord() {
    //The maximum is exclusive and the minimum (0) is inclusive
    var index = Math.floor(Math.random() * words.length); 
    console.log('selected index', index);
    var selectedWord = words[index];
    console.log('selected word', selectedWord);
    return words[index];
}




function wordGame() {
 


    checkWin = '';
    guessedLetter = '';

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
        checkWin += '_';
    }
    checkWin = checkWin.split('');
    document.getElementById('guess-button').disabled = false;
    console.log(checkWin);
}

function guessLetter() {
    var letterGuess = document.getElementById('guess-input').value;
    console.log ('From guess input box:', letterGuess);
    
    // Alert user to enter a letter
    if(letterGuess.length !== 1) {
        response.textContent = 'Pls enter a letter';
    }

    // Check if letter is duplicate
    else if(guessedLetter.includes(letterGuess) === true) {
        response.textContent = 'Letter already guessed. Pls pick another letter';
    }
    // Guessed letter is correct
    else if(selectedWord.include(letterGuess) === true) {
        //  Display correct letter to page and put to Check Win
        for(var i = 0; i < stateLength; i++) {
            if(letterGuess === selectedState[i]) {
                document.getElementById('letter-' + i).textContent = letterGuess;
                checkWin[i] = letterGuess;
                console.log('correct guessed letter ', checkWin[i]);
            }
        }
    }
}

