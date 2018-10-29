/* global words */
/* eslint no-console: "off" */
/* exported loadWord guess */

var word = words[Math.floor(Math.random() * words.length)]; // get a random word from array
console.log(word);

// global variables
var x;
var guessArray = []; // create an empty array to house the letter guesses / guessArray = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
var canvas = document.getElementById('canvas');
var count = 0;    // total guesses made
var correct = 0;    // total correct guesses made
// var incorrect = 0;


// fill empty array with underscrores times the length of random word
function loadWord() {
    for(var i = 0; i < word.length; i++) {
        guessArray[i] = "_";
    }
    x = guessArray.join(" ");               // x = "_ _ _ _ _ _ _ _ _ _"
    document.getElementById("guess").innerHTML = x;
}

// keep track of total guesses
function keepCount() {
    count++;
    document.getElementById("total-count").innerHTML = 'Total guesses made: ' + count;
}


// Guess a letter
function guess() {
    var letter = document.getElementById("letter").value;  // letter guessed
    highlightInput();

    if(letter.length > 0) {
        for(var i = 0; i < word.length; i ++) {
            if(word[i] === letter) {
                guessArray[i] = letter;
                correct++;
                document.getElementById("total-correct-count").innerHTML = 'Total correct letters guessed: ' + correct;
            }
        }
        document.getElementById("guess").innerHTML = guessArray.join(" "); // display correct letters
        keepCount();
        document.getElementById("letter").value = '';
    }

    if(count === 6) {
        var reset = document.getElementById("reset-button").classList.remove('hidden');
        document.getElementById("guess-button").disabled = true;
        document.getElementById("reset-button").focus();
        document.getElementById("result").innerHTML = "You lost!";
      
        var person = drawPerson();
        function drawPerson() {
            if(canvas.getContext) {
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = 'black';
                ctx.strokeStyle = 'black';
                ctx.lineWidth = '2';
                var circle = new Path2D();
                circle.moveTo(125, 35);
                circle.arc(100, 35, 15, 0, 2 * Math.PI);
                var rightArm = new Path2D();
                ctx.beginPath();
                ctx.moveTo(120, 65);
                ctx.lineTo(100, 75);
                ctx.stroke();
                var leftArm = new Path2D();
                ctx.beginPath();
                ctx.moveTo(80, 65);
                ctx.lineTo(100, 75);
                ctx.stroke();
                var leftLeg = new Path2D();
                ctx.beginPath();
                ctx.moveTo(75, 150);
                ctx.lineTo(100, 120);
                ctx.stroke();
                var rightLeg = new Path2D();
                ctx.beginPath();
                ctx.moveTo(125, 150);
                ctx.lineTo(100, 120);
                ctx.stroke();
                var body = new Path2D();
                ctx.beginPath();
                ctx.moveTo(100, 30);
                ctx.lineTo(100, 120);
                ctx.stroke();
                ctx.fill(circle);
            }
        }
    } 
}



// highlight the guess letter text input
function highlightInput() {
    document.getElementById("letter").focus();
}

// play again button reloads the page
function refreshPage() {
    window.location.reload();
    highlightInput();
}