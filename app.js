/* globals words */
/* exported randomWord, wordGame, guessLetter */
/* eslint no-console: "off" */
'use strict';



//  Global Variables

var selectedWord;
var response = document.getElementById('game-response');
var guessedLetter = '';


var checkWin;
var guessNumber;
var guesses = document.getElementById('guessed-letters');
var guessesRemaining = document.getElementById('guesses-remaining');



function randomWord() {
    //The maximum is exclusive and the minimum (0) is inclusive
    var index = Math.floor(Math.random() * words.length); 
    console.log('selected index', index);
    var selectedWord = words[index];
    console.log('selected word', selectedWord);
    return words[index];
}




function wordGame() {
 
    //clear previous input box
    for(var j = 0; j < 13; j++) {
        document.getElementById('letter-' + j).textContent = ' ';
    }
    // clear game response line
    response.textContent = '';
    // clear guessed letters line
    guesses.textContent = '';

    guessNumber = 6;
    checkWin = '';
    guessedLetter = '';
    guessesRemaining.textContent = 'Guesses remaining: ' + guessNumber;

    // get random word from words array
    selectedWord = randomWord().toLowerCase();
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
    document.getElementById('guess-input').value = '';
    
    // Alert user to enter a letter
    if(letterGuess.length !== 1) {
        response.textContent = 'Pls enter a letter';
    }

    // Check if letter is duplicate
    else if(guessedLetter.includes(letterGuess) === true) {
        response.textContent = 'Letter already guessed. Pls pick another letter';
    }
    // Guessed letter is correct
    else if(selectedWord.includes(letterGuess) === true) {
        //  Display correct letter to page and put to Check Win
        for(var i = 0; i < selectedWord.length; i++) {
            if(letterGuess === selectedWord[i]) {
                if(i === 0) {
                    document.getElementById('letter-' + i).textContent = letterGuess.toUpperCase();
                    console.log('Cap first letter', letterGuess.toUpperCase());}
                else {
                    document.getElementById('letter-' + i).textContent = letterGuess;
                    
                } 
                checkWin[i] = letterGuess;
            
                console.log('correct guessed letter & index', checkWin[i], i);
            }
       
        }
        
        // Check if all letters correctly guessed
        if(selectedWord === checkWin.join('')) {
            response.textContent = 'Congratulations! You are going to the Party!';
            document.getElementById('guess-button').disabled = true;
        }
        guessedLetter = guessedLetter + letterGuess;
        console.log('guessed letter', guessedLetter);
        
    }

    // Guessed letter is incorrect 
    else {
        // ==> display pop balloon image
        document.getElementById('image').src = 'image' + guessNumber + '.png';
        
        // ==> decrement guesses remaining
        guessNumber--;
        guessesRemaining.textContent = 'Guesses remaining: ' + guessNumber;
        guessedLetter = guessedLetter + letterGuess;
        

    }
    guesses.textContent = guessedLetter.split('').join(', ');


}

