(function () {
    "use strict";
    var availableLetters, words, guessInput, guess, guessButton, 
    lettersGuessed, lettersMatched, output, man, letters, lives,
     currentWord, numLettersMatched, messages;



function setup() {
    availableLetters = "abcdefghijklmnopqrstuvwxyz";
    lives = 6;
    words = ["witch", "candy", "curse", "spell", "zombie", "costume"];
    messages = {
        win: 'Great Job!',
        lose: 'You lose!',
    };
    
    
    var lettersGuessed = lettersMatched = '';
    var numLettersMatched = 0;
    var currentWord = words[Math.floor(Math.random() * words.length)];
    var output = document.getElementById("output");
    var man = document.getElementById("man");
    var guessInput = document.getElementById("letter");

    man.innerHTML = ' You have ' + lives + ' lives remaining';
    output.innerHTML = '';

    var currentGuess = document.getElementById('letter').value = '';
    var guessButton = document.getElementById('guess');

    /* display letters in current word */
    var letters = document.getElementById('letters');
    letters.innerHTML = '<li class="current-word">Current word:</li>';

    /* set up display of letters in current word */
    var letters = document.getElementById("letters");
    letters.innerHTML = '<li class="current-word">Current word:</li>';

    var letter, i;
    for (i = 0; i < currentWord.length; i++) {
        letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
        letters.insertAdjacentHTML('beforeend', letter);
    }

    /* make #man and #output blank, create vars for later access */
    var output = document.getElementById("output");
    var man = document.getElementById("man");
    var guessInput = document.getElementById("letter");

    man.innerHTML = 'You have ' + lives + ' lives remaining';
    output.innerHTML = '';

    document.getElementById("letter").value = '';

    function gameOver(win) {
        if(win) {
            output.innerHTML = messages.win;
            output.classList.add('win');
        } else {
            output.innerHTML = messages.lose;
            output.classList.add('error');
        }

        guessInput.style.display = guessButton.style.display = 'none';
        guessInput.value = '';
    }
    
    /* Start game - should ideally check for existing functions attached to window.onload */
    window.onload = setup();

    /* buttons */
    

    /* reset letter to guess on click */
   

    /* main guess function when user clicks #guess */
    document.getElementById('hangman').onsubmit = function(e) {
        if(e.preventDefault) e.preventDefault();
        output.innerHTML = '';
        output.classList.remove('error', 'warning');
        var guess = guessInput.value;

        /* does guess have a value? if yes continue, if no, error */
        if(guess) {
            /* is guess a valid letter? if so carry on, else error */
            if(availableLetters.indexOf(guess) > -1) {
                /* has it been guessed (missed or matched) already? if so, abandon & add notice */
                if((lettersMatched && lettersMatched.indexOf(guess) > -1) || (lettersGuessed && lettersGuessed.indexOf(guess) > -1)) {
                    output.innerHTML = '"' + guess.toUpperCase() + '"' + messages.guessed;
                    output.classList.add('warning');
                }
                /* does guess exist in current word? if so, add to letters already matched, if final letter added, game over with win message */
                else if(currentWord.indexOf(guess) > -1) {
                    var lettersToShow;
                    lettersToShow = document.querySelectorAll('letter' + guess.toUpperCase());

                    for(var i = 0; i < lettersToShow.length; i++) {
                        lettersToShow[i].classList.add('correct');
                    }

                    /* check to see if letter appears multiple times */
                    for(var j = 0; j < currentWord.length; j++) {
                        if(currentWord.charAt(j) === guess) {
                            numLettersMatched += 1;
                        }
                    }

                    currentGuess += guess;
                    if(numLettersMatched === currentWord.length) {
                        gameOver(true);
                    }
                }
                /* guess doesn't exist in current word and hasn't been guessed before, add to lettersGuessed, 
                reduce lives & update user */
                else {
                    lettersGuessed += guess;
                    lives--;
                    man.innerHTML = 'You have ' + lives + ' lives remaining';
                    if(lives === 0) gameOver();
                }
            }
            /* not a valid letter, error */
            else {
                output.classList.add('error');
                output.innerHTML = messages.validLetter;
            }
        }
        /* no letter entered, error */
        else {
            output.classList.add('error');
            output.innerHTML = messages.validLetter;
        }
        return false;
    };
}    
function showImage() {
    var image = ['dead.png', 'one-leg.png', 'no-leg.png', 'no-body.png', 'one-arm.png', 'head.png', 'beg.png'];
    var arrayLength = image.length;
    console.log('lives are', lives);
    lives--;
    var img1 = document.getElementById('image');
    image.src.innerHTML = image[3];
/*
    console.log('img1', img1);
    var img2 = document.getElementById('head');
    if(lives < 6){
        img1.style.visibility = 'visible';
    }
    if(lives < 5){
        img1.style.visibility = 'visible';
    }*/
}
