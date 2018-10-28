/* exported loadWord handleGuess */
/* eslint-disable no-console */
'use strict'; 

var wordArray = [];
var letterDisplay = document.getElementById('blank-spaces');
var image = document.getElementById('gallows');
var incorrectLetters = document.getElementById('letters-guessed');

var blanks = [];
var blankJoin;
var wrongTries = 0;

function loadWord() {
    var copy = words.slice();
    var index = Math.floor(Math.random() * 14);
    var selectedWord = getRandomWord();
    var letters = selectedWord.split('');
    wordArray = letters;
    console.log(wordArray);
    
    console.log('word is ', selectedWord);
    function getRandomWord() {
        var word = copy[index];
        copy.slice(index, 1);
        return word;
    }
    for(var i = 0; i < letters.length; i++) {
        blanks.push('_');
    }
    blankJoin = blanks.join(' ');
    letterDisplay.textContent = blankJoin; 
}

loadWord();

function handleGuess() {
    var input = document.getElementById('guess');
    var guessedLetter = input.value.toLowerCase();
    console.log('letter guessed was', guessedLetter);
        
    var wrongLetters = [];

    var guessWork = false;
    
    var wrongTries = 0;
    for(var i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === guessedLetter) {
            console.log('match');
            guessWork = true;  
        }

        if(guessWork) {
            for(var k = 0; k < wordArray.length; k++) {
                if(wordArray[k] === guessedLetter) {
                    blanks[k] = guessedLetter;
                }
            }
            console.log(blanks); 
            var display = blanks.join(' ');
            letterDisplay.textContent = display;
            console.log(display);
        }

        else {
            console.log('wrong');
            if(i === (wordArray.length - 1)) {
                wrongLetters.push(guessedLetter);
                incorrectLetters.textContent += wrongLetters;
                
            }
            wrongTries += 1;
            console.log('number of wrong tries is ', wrongTries);
        
            wrongLetters.push(guessedLetter);
            incorrectLetters.textContent = wrongLetters[i];
            wrongTries += 1;
            image.src = 'pic' + wrongTries + '.png';
       
            incorrectLetters.textContent += wrongLetters;
        
    
        // for(var j = 0; j < wordArray.length; j++) {
        //     if(wrongLetters[j] !== wordArray.length) {
        //         console.log('false');
        //         var condition = false;
        //         if(condition === false) {
        //             wrongTries += 1;
        //             image.src = 'pic' + wrongTries + '.png';
        //         }

        //     }
        //}
        }

        
        // while(tries < 6) {
            // image.src = 'pic' + tries + '.png';
        // }
    }
}