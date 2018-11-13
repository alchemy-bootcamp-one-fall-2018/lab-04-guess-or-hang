/* exported startGame checkGuessLetter */
/* global wordList*/
var wrongWordList = [];

var guessLetterForm = document.getElementById('guess-letter-form');
var submitButton = document.getElementById('submit');
gallows();

function getRandomWord(words) {
    var wordIndex = Math.floor(Math.random() * words.length);
    return words[wordIndex];
}

var word = '';

function removeElement() {
    var element = document.getElementById('blanks');
    element.innerHTML = '';
}

function startGame() {
    word = getRandomWord(wordList);
    wrongGuessCount = 0;
    wrongWordList.length = 0;
    guessesLeft();
    gallows();
    var hiddenLose = document.getElementById('lose-game');
    hiddenLose.classList.add('hidden');
    var hiddenWin = document.getElementById('win-game');
    hiddenWin.classList.add('hidden');
    var hiddenWrongLetters = document.getElementById('wrong-letters');
    hiddenWrongLetters.classList.add('hidden');

    submitButton.disabled = false;
    if(document.getElementsByClassName('letter')) {
        removeElement();
    }
    var blanks = document.getElementById('blanks');
    for(var i = 0; i < word.length; i++) {
        var letter = document.createElement('div');
        letter.className = 'letter';
        blanks.appendChild(letter);
    }
}

var correctGuessCount = 0;
var wrongGuessCount = 0;

function checkGuessLetter() {
    var elements = guessLetterForm.elements;
    var guess = elements['guess-letter-id'].value;

    var hiddenWrongLetters = document.getElementById('wrong-letters');
    hiddenWrongLetters.classList.remove('hidden');

    if(word.includes(guess)) {
        for(var i = 0; i < word.length; i++) {
            if(guess === word[i]) {
                document.getElementById('blanks').children[i].textContent = guess;
                correctGuessCount++;
            }
            if(correctGuessCount === word.length) {
                var winGame = document.getElementById('win-game');
                winGame.classList.remove('hidden');
            }
        }
    } else {
        wrongGuessCount++;
        var wrongGuessLetter = document.getElementById('wrong-letters');
        wrongWordList.push(guess);
        wrongGuessLetter.textContent = 'Wrong Guesses: ' + wrongWordList;
        guessesLeft();
    }
    if(wrongGuessCount === 1) {
        drawHead();
    }
    if(wrongGuessCount === 2) {
        drawBody();
    }
    if(wrongGuessCount === 3) {
        drawLeftArm();
    }
    if(wrongGuessCount === 4) {
        drawRightArm();
    }
    if(wrongGuessCount === 5) {
        drawLeftLeg();
    }
    if(wrongGuessCount === 6) {
        drawRightLeg();
        submitButton.disabled = true;
        var loseGame = document.getElementById('lose-game');
        loseGame.classList.remove('hidden');
    }
    resetGuessLetter();
}

function resetGuessLetter() {
    var elements = guessLetterForm.elements;
    var submit = elements['guess-letter-id'];
    submit.value = '';
}

function guessesLeft() {
    var guesses = document.getElementById('guesses');
    guesses.textContent = 6 - wrongGuessCount;
}


//Body Parts
function drawHead() {
    var head = document.getElementById('myCanvas');
    var headPart = head.getContext('2d');
    headPart.beginPath();
    headPart.arc(250, 100, 30, 0, 7);
    headPart.stroke();
}

function drawBody() {
    var bodyLine = document.getElementById('myCanvas');
    var bodyLinePart = bodyLine.getContext('2d');
    bodyLinePart.moveTo(250, 130);
    bodyLinePart.lineTo(250, 250);
    bodyLinePart.stroke();
}

function drawLeftArm() {
    var leftArm = document.getElementById('myCanvas');
    var leftArmPart = leftArm.getContext('2d');
    leftArmPart.moveTo(250, 150);
    leftArmPart.lineTo(180, 170);
    leftArmPart.stroke();
}

function drawRightArm() {
    var rightArm = document.getElementById('myCanvas');
    var rightArmPart = rightArm.getContext('2d');
    rightArmPart.moveTo(250, 150);
    rightArmPart.lineTo(320, 170);
    rightArmPart.stroke();
}

function drawLeftLeg() {
    var leftLeg = document.getElementById('myCanvas');
    var leftLegPart = leftLeg.getContext('2d');
    leftLegPart.moveTo(250, 250);
    leftLegPart.lineTo(180, 350);
    leftLegPart.stroke();
}

function drawRightLeg() {
    var rightLeg = document.getElementById('myCanvas');
    var rightLegPart = rightLeg.getContext('2d');
    rightLegPart.moveTo(250, 250);
    rightLegPart.lineTo(320, 350);
    rightLegPart.stroke();
}


// Gallows
function gallows() {
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
}