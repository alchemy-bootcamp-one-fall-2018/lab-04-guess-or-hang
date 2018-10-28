/*exported enterGuess*/

var words = ['skiing', 'jogging', 'aerobics', 'cycling', 'paddling'];
var rand = words[Math.floor(Math.random() * words.length)].split('');

function tryRandomWord() {
    var emptyBlanks = [];
    var wordLength = rand.length;
    for(var i = 0; i < wordLength; i++) {
        emptyBlanks.push('__');
    }
    console.log("your word is " + wordLength + " letters long");
    console.log(emptyBlanks);
    return emptyBlanks;
}
var blanks = tryRandomWord();
var wrongGuesses = 0;


function enterGuess() {
    var guessInputs = document.getElementById('userGuess').value;
    if(rand.includes(guessInputs)) {
        blanks.splice(rand.indexOf(guessInputs), 1, guessInputs);
        console.log('you guessed correctly! Enter your next guess');
        console.log(blanks);
    
    } else {
        console.log('Try again!');
        wrongGuesses++;
        if(wrongGuesses === 6) {
            console.log('GAME OVER!!!');
        } else {
            var gallows = document.getElementById('firstMan');
            var drawStick = ['Images/StickMan1.png', 'Images/StickMan2.png', 'Images/StickMan3.png', 'Images/StickMan4.png', 'Images/StickMan5.png', 'Images/StickMan6.png'];
            gallows.src = drawStick[wrongGuesses];
        }
    }
       
}


    













