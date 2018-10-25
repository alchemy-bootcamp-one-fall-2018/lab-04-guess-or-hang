/* globals words */
/* eslint-disable no-console*/
'use strict'; 



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

    console.log(selectedWord.length);
    
}
loadWord();

