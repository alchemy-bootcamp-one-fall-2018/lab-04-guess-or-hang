/* globals words */
/* globals imageSources */
/* exported play */

'use strict';

//put this in a function to call it once on page load, and on New Game button click.
var randomMax = words.length - 1;
var word = words[Math.floor(Math.random() * randomMax)].toUpperCase();
console.log(word);
var guessCount = 0;
var dashes = ['___'];
var correctGuesses = document.getElementById('correctGuesses');
var lettersGuessed = document.getElementById('lettersGuessed');
var letters = '';

for(var i = 0; i < word.length - 1; i++){
    dashes.push('___');
}

correctGuesses.innerHTML = dashes.join(' ');

//Display line blanks for each letter of the word
//change incorrectLetter to lettersGuessed?

function play() {
    var input = document.getElementById('guessLetter').value.toUpperCase();
    var message = document.getElementById('message');
    var gallows = document.getElementById('gallows');
    //keep track of all letters guessed
    
    //clear text input
    if(guessCount < 6) {

        //add input to lettersGuessed var
        //add input to lettersGuessed html
        
        //place input in lettersGuessed
        console.log(letters);
        letters += '     ' + input;
        lettersGuessed.innerHTML = letters;

        
        if(word.includes(input)) {
            
            for(var j = 0; j < word.length; j++) {
                if(input === word[j]) {
                    dashes[j] = input;
                }
            }
           
            correctGuesses.innerHTML = dashes.join(' ');
            message.innerHTML = '<p class="green">Correct!</p>';

            //send message to message
        } else {
            gallows.innerHTML = imageSources[guessCount];
            guessCount++;
            //add body part to person
            //send message to message
            message.innerHTML = '<p class="red">Guess Again</p>';
        }
        if(dashes.join() === word) {
            //button displays "You Win! - New Game". Reset game
        } 
    } else {
        // change button to a restart, button becomes "You Lose - New Game". Display "The word was --".
    }
    
}

var g = document.getElementById('gallows');
g.innerHTML = '<img id="gallows" src="1gallows.jpg">';

//more vertical spacing for desktop version