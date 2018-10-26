
function tryButton() {
    console.log('hello');
}

// address by index, i.e. document.getElementById('letter-' + i)

// wire button up to input

// letter displays on blank

// if letter is wrong display body part

// if(guessIsWrong) {
    // var elements = placeholder.elements;
    // var submit = elements.guess;
    // placeholder.textContent = '';
    // }
    
    // Guess Letter - A form with an input and button for guessing a letter. You can use maxlength="1" attribute on the input to limit to one letter and required attribute to require at least one letter
    // Or you can come up with a different UI paradigm!
    
    // Letters Guessed - A list of letters guessed so far (correct and incorrect)
    
    // Number of Guesses - Shows how many total guesses have been made
    
    // Message - A place to show messages (like win or lose)
var circle = document.getElementById("myCanvas");
var ctx = circle.getContext("2d");
ctx.beginPath();
ctx.arc(250, 100, 30, 0, 7);
ctx.stroke();

var bodyLine = document.getElementById("myCanvas");
var ctx = bodyLine.getContext("2d");
ctx.moveTo(250, 130);
ctx.lineTo(250, 250);
ctx.stroke();

var leftArm = document.getElementById("myCanvas");
var ctx = leftArm.getContext("2d");
ctx.moveTo(250, 150);
ctx.lineTo(180, 170);
ctx.stroke();

var rightArm = document.getElementById("myCanvas");
var ctx = rightArm.getContext("2d");
ctx.moveTo(250, 150);
ctx.lineTo(320, 170);
ctx.stroke();

var leftLeg = document.getElementById("myCanvas");
var ctx = leftLeg.getContext("2d");
ctx.moveTo(250, 250);
ctx.lineTo(180, 350);
ctx.stroke();

var rightLeg = document.getElementById("myCanvas");
var ctx = rightLeg.getContext("2d");
ctx.moveTo(250, 250);
ctx.lineTo(320, 350);
ctx.stroke();