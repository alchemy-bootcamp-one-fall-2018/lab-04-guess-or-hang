(function () {
    "use strict";
    var availableLetters, words, guessInput, guess, guessButton, lettersGuessed, 
    lettersMatched, messages, currentWord;

    function setup() {
        availableLetters = "abcdefghijklmnopqrstuvwxyz";
        lives = 5;
        words = ["witch", "candy", "curse", "spell", "zombie", "costume"];
        messages = {
            win: "Great Job!",
            lose: "You lose!"
        };
        
        lettersGuessed = lettersMatched = ' ';
        numLettersMatched = 0;
        currentWord = words[Math.floor(Math.random() * words.length)];
        output = document.getElementById("output");
        man = document.getElementById("man");
        guessInput = document.getElementById("letter");

        man.innerHTML = 'You have ' + lives + ' lives remaining';
        output.innerHTML = '';

        document.getElementById("letter").value = '';
        guessButton = document.getElementById("guess");

        /* display letters in current word */
        letters = document.getElementById("letters");
        letters.innerHTML = '<li class="current-word">Current word:</li>';

        var letter, i;
        for (i = 0; i < currentWord.length; i++) {
            letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
            letters.insertAdjacentHTML('beforeend', letter);
        }

    }