/* global words */
//placeholder for building hangman

//building guessing game
//function to pick word and bring to DOM
        
//randomly select index
var word = words[Math.floor(Math.random() * words.length)];        
    
//set placeholder for letters
var answerDisplay = word.split('');
console.log(answerDisplay);

//display number of dashes corresponding to number of letters
var selectedLetter = [];
for(var i = 0; i < word.length; i++) {
    selectedLetter[i] = '_';
    console.log(selectedLetter);
}
var selectedWord = document.getElementById('selected-letter');
selectedWord.textContent = selectedLetter.join(' ');


//holds a mix of blank and solved letters
var accurateGuesses = [];
//holds all wrong guesses
var nope = [];
//holds the letters guessed
var lettersGuessed = '';

//evaluate word for number of letters
var numBlanks = 0;
numBlanks = selectedWord.length;
function checkLetters(letter) {
    var letterInWord = false;

    for(var j = 0; j < numBlanks; j++) {
        if(selectedWord[j] === letter) {
            letterInWord = true;
        }
    }
    if(letterInWord) {
        for(var k = 0; k < numBlanks; k++) {
            if(chosenWord[k] === letter) {
                accurateGuesses[k] = letter;
            }
        }
        console.log('gothere');
    }
}

//     console.log("There are " + word.length + " letters in the word");

//program to call letters/game loop
//while (remainingLetters > 0) {
// Show the player their progress
//console.log(word.join);
   
    
//form for user to enter letter
    
//evaluate if choice is correct/incorrect
//if correct display letter in spot on word
//if incorrect increment hangman
    
//respond to pick again or decrease number of tries remaining
   
//loop to evaluate man is hung
//if word completed successfully, "you win!"
//if man hung, "you lose!"
//reset to play again

// based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// function getRandomIndex(length) {
//     //The maximum is exclusive and the minimum (0) is inclusive
//     return Math.floor(Math.random() * length); 
//images: -absolute positioning, flex box, Change img src (paint animator)
