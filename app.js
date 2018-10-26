/* globals words */
/* eslint-disable no-console*/
'use strict'; 

// var blankLines = document.getElementById('blank-lines');

function getRandomWord(max) {
    return Math.floor(Math.random() * max); 
}

function loadWord() {
    var copy = words.slice();   
    console.log('random word', getRandomWord(13));

    
    function generateWord() {
        var randomWord = getRandomWord(copy.length);
        var word = copy[randomWord];
        copy.splice(randomWord, 1);
        return word;
 
    }

    var selectedWord = generateWord();
    console.log(selectedWord);


    var wordLength = selectedWord.length();
    console.log(wordLength);

} 
// loadWord();

