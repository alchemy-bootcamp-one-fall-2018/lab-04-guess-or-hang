/* eslint no-console: "off" */
// eslint-disable-next-line
function tryButton() {

}

var wordList = ['turtle', 'pants', 'mom', 'laptop', 'table', 'chair', 'warcraft', 'starcraft'];

var guessLetterForm = document.getElementById('guess-letter-form');
var firstLetter = document.getElementById('blanks');

function getRandomWord(words) {
    var wordIndex = Math.floor(Math.random() * words.length);
    return words[wordIndex];
}

var word = '';

function removeElement() {
    // Removes an element from the document
    var element = document.getElementById('blanks');
    element.innerHTML = '';
}

// eslint-disable-next-line
function startGame() {
    word = getRandomWord(wordList);
    if(document.getElementsByClassName('letter')) {
        removeElement();
    }
    var blanks = document.getElementById('blanks');
    for(var i = 0; i < word.length; i++) {
        var letter = document.createElement('div');
        letter.className = 'letter';
        letter.textContent = '__';
        blanks.appendChild(letter);
    }
}

// eslint-disable-next-line
function checkGuessLetter() {
    var elements = guessLetterForm.elements;
    var guess = elements['guess-letter-id'].value;
    firstLetter.textContent = guess;

    console.log(guess);
    resetGuessLetter();
}



function resetGuessLetter() {
    var elements = guessLetterForm.elements;
    var submit = elements['guess-letter-id'];
    submit.value = '';
}



//Body Parts
var head = document.getElementById('myCanvas');
var headPart = head.getContext('2d');
headPart.beginPath();
headPart.arc(250, 100, 30, 0, 7);
headPart.stroke();

var bodyLine = document.getElementById('myCanvas');
var bodyLinePart = bodyLine.getContext('2d');
bodyLinePart.moveTo(250, 130);
bodyLinePart.lineTo(250, 250);
bodyLinePart.stroke();

var leftArm = document.getElementById('myCanvas');
var leftArmPart = leftArm.getContext('2d');
leftArmPart.moveTo(250, 150);
leftArmPart.lineTo(180, 170);
leftArmPart.stroke();

var rightArm = document.getElementById('myCanvas');
var rightArmPart = rightArm.getContext('2d');
rightArmPart.moveTo(250, 150);
rightArmPart.lineTo(320, 170);
rightArmPart.stroke();

var leftLeg = document.getElementById('myCanvas');
var leftLegPart = leftLeg.getContext('2d');
leftLegPart.moveTo(250, 250);
leftLegPart.lineTo(180, 350);
leftLegPart.stroke();

var rightLeg = document.getElementById('myCanvas');
var rightLegPart = rightLeg.getContext('2d');
rightLegPart.moveTo(250, 250);
rightLegPart.lineTo(320, 350);
rightLegPart.stroke();


// Gallows
var rope = document.getElementById('myCanvas');
var ropePart = rope.getContext('2d');
ropePart.moveTo(250, 70);
ropePart.lineTo(250, 30);
ropePart.stroke();

var topPart = document.getElementById('myCanvas');
var topLine = topPart.getContext('2d');
topLine.moveTo(250, 30);
topLine.lineTo(100, 30);
topLine.stroke();

var sidePart = document.getElementById('myCanvas');
var sideLine = sidePart.getContext('2d');
sideLine.moveTo(100, 30);
sideLine.lineTo(100, 400);
sideLine.stroke();

var cornerPiece = document.getElementById('myCanvas');
var cornerLine = cornerPiece.getContext('2d');
cornerLine.moveTo(150, 30);
cornerLine.lineTo(100, 80);
cornerLine.stroke();

var bottomPart = document.getElementById('myCanvas');
var bottomLine = bottomPart.getContext('2d');
bottomLine.moveTo(50, 400);
bottomLine.lineTo(320, 400);
bottomLine.stroke();