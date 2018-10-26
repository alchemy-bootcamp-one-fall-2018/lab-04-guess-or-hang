// word bank
var words = ["cheese", "coffee", "park", "flower", "book"]; 
var wordArray = [];
var letterDisplay = document.getElementById('blank-spaces');
var image = document.getElementById('gallows');
var incorrectLetters = document.getElementById('letters-guessed');
//load word randomly

var blanks = [];
var blankJoin;

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
    blankJoin = blanks.join(' ');
    letterDisplay.textContent = blankJoin; 

}

loadWord();

function handleGuess() {
    var input = document.getElementById('guess');
    var guessedLetter = input.value.toLowerCase();
    console.log('letter guessed was', guessedLetter);
        
    //blanks[i] = guessedLetter;
    // var wrongLetters = [];

    var tries = 0;
    
    var letterInWord = false; 

    for (var i = 0; i < wordArray.length; i++) {
        if(wordArray[i] === guessedLetter) {
            console.log('match');
            letterInWord = true;
            // var array = blankJoin.split(' ');
            // //console.log(array);
            // array.splice(i, 1, guessedLetter);
            // //letter needs in replace the blank space 
            // //blanks[i] this will go through each blank space   
        }

        if(letterInWord) {
            for (var k = 0; k < wordArray.length; k++) {
                if (wordArray[k] === guessedLetter) {
                     blanks[k] = guessedLetter;
                }
            }
            console.log(blanks);
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