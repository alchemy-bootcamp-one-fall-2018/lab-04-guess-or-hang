/*exported enterGuess*/

var words = ['skiing', 'jogging', 'aerobics', 'cycling', 'paddling'];

var rand = words[Math.floor(Math.random() * words.length)].split('');
//console.log('random word-', rand);


function tryRandomWord() {
    var emptyBlanks = [];
    var wordLength = rand.length;
    //console.log('word length-', wordLength);

    for(var i = 0; i < wordLength; i++) {
        emptyBlanks.push('__');
    }
    console.log("your word is " + wordLength + " letters long");
    console.log(emptyBlanks);
    return emptyBlanks;
}
var blanks = tryRandomWord();

function enterGuess() {
    var guessInputs = document.getElementById('userGuess').value;
    if(rand.includes(guessInputs)) {
        blanks.splice(rand.indexOf(guessInputs), 1, guessInputs);
        console.log('you guessed correctly! Enter your next guess');
        console.log(blanks);
    }
}



    /*for(var i = 0; i < rand.length; i++) {
        
        if(guessInputs === rand[i]) {
            blanks.splice(i, 1, rand[i]);
            console.log('you guessed correctly! Enter your next guess');
            console.log(blanks);
        }
        if(guessInputs != rand[i]) {
            console.log('TRY AGAIN!');
        }
    }*/


    














//    return rand;
// var rand = tryRandomWord();
//function getUnderscores(param) {
//}
// getUnderscores(rand);