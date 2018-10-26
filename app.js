/* globals words */
/* eslint-disable no-console*/
'use strict'; 

// var blankLines = document.getElementById('blank-lines');

function getRandomWord(max) {
    return Math.floor(Math.random() * max); 
}

function loadWord() {
    var copy = words.slice();   
    console.log('random word', getRandomWord(14));

    
    function generateWord() {
        var randomWord = getRandomWord(copy.length);
        var word = copy[randomWord];
        copy.splice(randomWord, 1);
        
        return word;
    }

    var selectedWord = generateWord();
    console.log(selectedWord);

    var answerLines = [];
    if(copy.length === 9) {
        selectedWord.push(copy[0]);
    
    }
    for(var i = 0; i < 9; i++) {
        var linesToHide = answerLines[i];
        var display = '';
        if(linesToHide) {
            display = linesToHide();
        }
        console.log(answerLines);
        
    }

} 
loadWord();

