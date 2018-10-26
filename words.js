/* exported enterGuess */

var words = ['skiing', 'jogging', 'aerobics', 'cycling', 'paddling'];

var rand = words[Math.floor(Math.random() * words.length)].split('');
console.log('random word-', rand);


function tryRandomWord() {
    var emptyBlanks = [];
    var wordLength = rand.length;
    console.log('word length-', wordLength);

    for(var i = 0; i < wordLength; i++) {
        emptyBlanks.push('__');
        console.log(emptyBlanks);

        console.log("your word is " + wordLength + " long");
    }
    return emptyBlanks;
}
var blanks = tryRandomWord();

function enterGuess() {
    console.log(blanks);
    var guessInputs = document.getElementById('userGuess').value;
    for(var i = 0; i < rand.length; i++) {
        if(guessInputs === rand[i]) {
            var userWord = blanks.splice(i, 1, rand[i]);
            console.log(blanks);
        }
    }

}
    














//    return rand;
// var rand = tryRandomWord();
//function getUnderscores(param) {
//}
// getUnderscores(rand);