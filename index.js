var wordList = ['heart', 'puppy', 'kitten', 'octopus', 'platypus', 'diamond', 'gold', 'river'];
var randomWord = wordList[Math.floor(Math.random()*wordList.length)];
var wordLength = randomWord.length;
var randomWordArray = randomWord.split('');
var displayGuesses = [];
var guessedLetter = 'i';
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

    if(letterIsInWord === true){
        function getAllIndexes(array, value) {
            var indexes = []; 

            for(var i = 0; i < array.length; i++) {
                if(array[i] === value) {
                    indexes.push(i);
                }
            }
            return indexes;
        }

        var letterLocations = getAllIndexes(randomWordArray, guessedLetter);
        console.log(letterLocations, randomWord);
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
        //continueGame = 'false'