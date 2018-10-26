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
    }