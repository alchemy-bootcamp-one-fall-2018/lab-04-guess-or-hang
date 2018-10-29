/* global words */

// get a random number between 0-8!

var guessMeLetters = [];
var letterBlanksNum = 0;
var solveInProgress = [];
var guessedWrong = [];
var guessedLetter = '';
var guessCount = 6; // # of body parts

function randoWord() {

    function getRandomInt() {
        return Math.floor(Math.random() * 8);
    }
    var randoNum = getRandomInt();
    return words[randoNum];
}
var guessMe = randoWord();
console.log(guessMe);

function randoWord() {
    // get a random number between 0-8
    function getRandomInt() {
        return Math.floor(Math.random() * 8); // # of words in list
    }
    var randoNum = getRandomInt();
    return words[randoNum];
}
//console.log(guessCount);

function guessTheWord() {
    checkGuess(guessedLetter);
    afterGuess();
    //} //classname?
}
console.log(guessTheWord);

guessMeLetters = guessMe.split(''); // split into array of letters
letterBlanksNum = guessMeLetters.length; // # of letters
//console.log(guessMe);

for(var i = 0; i < letterBlanksNum; i++) {
    solveInProgress.push('_');
}

var letter = document.getElementById("guess-entry");
function checkGuess(letter) {
    var letterInSolution = false;
    for(var i = 0; i < letterBlanksNum; i++) {
        if(guessMe[i] === letter) {
            letterInSolution = true;
        }
    }
    if(letterInSolution) {
        for(var index = 0; index < letterBlanksNum; index++) {
            if(guessMe[index] === letter) {
                solveInProgress[index] = letter;
            }
        }
    } else {
        guessedWrong.push(letter);
        guessCount = guessCount - 1;
    }
}

function afterGuess() {
    document.getElementById("guesses-left").innerHTML = guessCount;
    document.getElementById("letter-blanks").innerHTML = solveInProgress.join(" ");
    document.getElementById("guesses-used").innerHTML = guessedWrong.join(" ");
    console.log(guessedWrong);
    if(guessMeLetters.toString() === solveInProgress.toString()) {
        window.alert("You Win!!");
    }
    else if(guessCount === 0) {
        window.alert("You Lose!");
    }
}