// word bank
var words = ["cheese", "coffee", "park", "flower", "book"]; 
var wordArray = [];
var letterDisplay = document.getElementById('blank-spaces');
var image = document.getElementById('gallows');
var incorrectLetters = document.getElementById('letters-guessed');
//load word randomly

var blanks = [];


function loadWord() {
    var copy = words.slice();
    var index = Math.floor(Math.random() * 4)
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
    var blankJoin = blanks.join(' ');
    letterDisplay.textContent = blankJoin; 

}

loadWord();
// split('');
// console.log(blanks[1]);

console.log(blanks);
console.log(blankJoin);

function handleGuess() {
    var input = document.getElementById('guess');
    var guessedLetter = input.value.toLowerCase();
    console.log('letter guessed was', guessedLetter);

    // var wrongLetters = [];

    var tries = 0;
    
    for (var i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === guessedLetter) {
            
            console.log('match');
        }
        // else {
        //     console.log('wrong');
        //     wrongLetters.push(guessedLetter);
        //     incorrectLetters.textContent += wrongLetters[i];
        // }
    }
}
// choose a random word

// make an array for the word

// loop for guess until the word is complete

// show answer until complete
    //show congrats or lose banner

// restart the game 