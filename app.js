/* globals words */
/* eslint-disable no-console*/
'use strict'; 

var blankLines = document.getElementById('blank-lines');

function loadWord() {
    var copy = words.slice();

    var index = Math.floor(Math.random() * 14); 
    // console.log(index);
    
    function getRandomWord() {
        
        var word = copy[index];

        copy.slice(index, 1);

        return word;
        // console.log(word);

    }

    var selectedWord = getRandomWord();



    // console.log(selectedWord);
    var wordLength = selectedWord.length;

    if(wordLength === 3) {
        blankLines.textContent = 

    }
    
}
loadWord();

function maxWordLength() {
    for(var i = 0; i < words.length; i++) {
        //sort smallest to biggest
        //length of last index[i]
//        repeat('____', 9)
//     }

//     .textContent = '___' + '____' + 
// }



// array[''___ ', ' ____', '______']


// replace array[1] with 

// array[1].textContent = "a"