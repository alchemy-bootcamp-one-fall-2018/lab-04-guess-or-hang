/* exported clickButton */
var winLoseContainer = document.getElementById('win-lose-container');
var guessLettersForm = document.getElementById('guess-letters');
/*"extends": "eslint:recommended"*/ 
/*eslint no-undef: "error"*/

var wordList = ['heart', 'puppy', 'kitten', 'octopus', 'platypus', 'diamond', 'gold', 'river'];
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
var wordLength = randomWord.length;
var randomWordArray = randomWord.split('');
var displayCorrectGuesses = [];
var displayAlreadyGuessed = document.getElementById('guessed display');
var guessedLetter = 'i';
var guessCount = wordLength;

for(var i = 0; i < wordLength; i++) {
    displayGuesses.push('_');
}

function clickButton() { 
    function arrayContainsGuessedLetter(guess) {
        var letterIsInWord = false;
        letterIsInWord = (randomWordArray.indexOf(guess) > -1);
        return letterIsInWord;
    }
    var letterIsInWord = arrayContainsGuessedLetter(guessedLetter);

function getAllIndexes(array, value) {
    var indexes = []; 

    for(var i = 0; i < array.length; i++) {
        if(array[i] === value) {
            indexes.push(i);
        }
    }
    return indexes;
}

    //places correct guesses in the blank letter space
    if(letterIsInWord === true){
        var letterLocations = getAllIndexes(randomWordArray, guessedLetter);
       	        for(var i = 0; i < letterLocations.length; i++) {
                    displayCorrectGuesses[letterLocations[i]] = guessedLetter;
                //   console.log(displayCorrectGuesses, randomWord);
        }

    //attempt to print the list of already guessed incorrect letters
    } else if(letterIsInWord != true){
        displayAlreadyGuessed += guessedLetter + ', ';
        console.log(displayAlreadyGuessed)
        guessCount -= 1;
        
    function getAllIndexes(array, value) {
        var indexes = []; 
        for(var i = 0; i < array.length; i++) {
            if(array[i] === value) {
                indexes.push(i);
            }
        }
    }
    return indexes;
}

function checkGuess(guessedLetter) {
    var letterIsInWord = arrayContainsGuessedLetter(guessedLetter);
    if(letterIsInWord === true){
        var letterLocations = getAllIndexes(randomWordArray, guessedLetter);
        for(var i = 0; i < letterLocations.length; i++) {
            displayGuesses[letterLocations[i]] = guessedLetter;
        }
        if(randomWordArray.toString() === displayGuesses.toString()) {
            gameIsDone = true;
            winLoseContainer.textContent = 'You win!';
        }
    }
    if(letterIsInWord === false) {
        guessCount = guessCount - 1;
        if(guessCount === 0) {
            gameIsDone = true;
            winLoseContainer.textContent = 'You lose!';
        }
    }
} 

   
    
    

    
    


   





function clickButton() {
    if(gameIsDone === false) {
        var guess = getGuess();
        checkGuess(guess);
        console.log(guess, randomWordArray, displayGuesses);
    }
}









//initialize DONE
// generate random word   DONE
//display number '_' for every letter in random word on screen DONE
//var continueGame = 'true'

//while(continueGame === 'true')

    //prompt user to give us a letter


    //validate input

    //check if letter is in random word

    //if the letter is in the word, 
        //display the letter for whichever spaces have that letter
        // if they won the game
            // continueGame = 'false'
            // display 'you win'
            // reveal reset button
            // hide submit button
            // code-spell-checker:disable-next-line
            // hide textbox entry


    //if the letter is not in the word
        //otherwise display letter in already guessed letters
        //add body part to hangman
        // decrease guesses remaining by 1

    //if remaining guesses = 0
        // display words 'you lose'
        // hide text input box
        // hide submit button
        // reveal reset button
<<<<<<< HEAD:index.js
        //continueGame = 'false'
=======
        //continueGame = false
>>>>>>> 236ca96116336106dfd25fc68bc7953e6efbf6bd:apps.js
