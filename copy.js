/* globals words */
/* exported play */

'use strict';

//put this in a function to call it once on page load, and on New Game button click.
var randomMax = words.length - 1;
var word = words[Math.floor(Math.random() * randomMax)].toLowerCase();
console.log(word);
var correctLetter = '    ______      ';
var guessCount = 0;
var dashes = '';
var correctGuesses = document.getElementById('correctGuesses');
var spaces = document.getElementById('spaces');

for(var i = 0; i < word.length; i++){
    dashes += '______      ';
}

spaces.innerHTML = dashes;

//Display line blanks for each letter of the word
//change incorrectLetter to lettersGuessed?

function play() {
    var input = document.getElementById('guessLetter').value;
    console.log('input:', input);
    var message = document.getElementById('message');
    //keep track of all letters guessed
    
    //clear text input

    if(guessCount < 6) {

        //add input to lettersGuessed var
        //add input to lettersGuessed html
        
        if(word.includes(input)) {

            //show all occurances of letter, in the right place.
            correctLetter += '<span>' + input + '</span>';
            console.log('correctLetter', correctLetter);
            correctGuesses.innerHTML = correctLetter;

            //send message to message
            //place input in lettersGuessed
        } else {
            guessCount++;
            //add body part to person
            //send message to message
            message.innerHTML = '<p class="red">Guess Again</p>';
        }
        if(correctLetter.length === word.length) {
            //button displays "You Win! - New Game". Reset game
        } 
        console.log('guessCount:', guessCount);
    }
    
    // change button to a restart, button becomes "You Lose - New Game". Display "The word was --".
}

//more vertical spacing for desktop version