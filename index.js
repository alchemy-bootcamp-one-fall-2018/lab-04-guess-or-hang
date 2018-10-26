/* globals words */
/* exported play */

'use strict';

//put this in a function to call it once on page load, and on New Game button click.
var randomMax = words.length - 1;
var word = words[Math.floor(Math.random() * randomMax)].toLowerCase();
console.log(word);
var correctLetter = '    ___      ';
var guessCount = 0;
var dashes = '';
var correctGuesses = document.getElementById('correctGuesses');
var spaces = document.getElementById('spaces');
var lettersGuessed = document.getElementById('lettersGuessed');

for(var i = 0; i < word.length; i++){
    dashes += '___      ';
}

spaces.innerHTML = dashes;

//Display line blanks for each letter of the word
//change incorrectLetter to lettersGuessed?

function play() {
    var input = document.getElementById('guessLetter').value;
    console.log('input:', input);
    //keep track of all letters guessed
    
    //clear text input
    console.log('hello');
    if(guessCount < 6) {

        //add input to lettersGuessed var
        //add input to lettersGuessed html
        
        //place input in lettersGuessed
        lettersGuessed.innerHTML = input;
        console.log(input);


        if(word.includes(input)) {

            //show all occurances of letter, in the right place.
            correctLetter += '<span>' + input + '</span>';
            console.log('correctLetter', correctLetter);
            correctGuesses.innerHTML = correctLetter;

            //send message to message
        } else {
            guessCount++;
            //add body part to person
            //send message to message
        }
        if(correctLetter.length === word.length) {
            //button displays "You Win! - New Game". Reset game
        } 
        console.log('guessCount:', guessCount);
    }
    
    // change button to a restart, button becomes "You Lose - New Game". Display "The word was --".
}

//more vertical spacing for desktop version