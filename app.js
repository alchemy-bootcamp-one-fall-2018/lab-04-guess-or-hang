/* globals words */
/* eslint-disable no-console*/
'use strict'; 

function getRandomWord(max) {
    return Math.floor(Math.random() * max); 
}

function generateWord() {
    var copy = words.slice();   
    var randomWord = getRandomWord(copy.length);
    var word = copy[randomWord];
    //console.log below is showing the item in the arry
    console.log(randomWord);
    return word;
}

//This line actually calling the function and determining the word
var selectedWord = generateWord();
//This line is showing the word determined in the array by console.log(randomWord);
console.log(selectedWord);

var wordArray = selectedWord.split('');
console.log(wordArray);

var hideLine = document.querySelectorAll('.wordArray');
for(var i = 0; i < hideLine.length; i++) {
    var li = hideLine[i];
    var linesToDisplay = wordArray[i];
    if(i < wordArray.length) {
        li.textContent = linesToDisplay;
        li.classList.remove('guess');
    }
    else {
        li.classList.add('guess');
    }
}


