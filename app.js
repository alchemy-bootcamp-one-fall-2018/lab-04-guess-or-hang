/* global words */
//placeholder for building hangman

//building guessing game
    //function to pick word and bring to DOM
// var words = document.getElementById('words');
// // words.textContent = words.length;
console.log('words', words);
        //randomly select index
function getRandomWord() {
    var index = getRandomIndex(copy.length);
    var words = copy[index];
    copy.splice(index, 1);
    console.log('words');
}
        //get word corresponding to index
    //set placeholder for letters
        //evaluate word for number of letters
//var length = words.length;
        //display number of dashes corresponding to number of letters
    //program to call letters
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
function getRandomIndex(length) {
    //The maximum is exclusive and the minimum (0) is inclusive
    return Math.floor(Math.random() * length); 
}