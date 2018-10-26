
function tryRandomWord() {
    var words = ['skiing', 'jogging', 'aerobics', 'cycling', 'paddling'];

    var rand = words[Math.floor(Math.random() * words.length)];
    console.log('random word-', rand);

    var wordLength = rand.length;
    console.log('word length-', wordLength);

    var blanks = '';

    for(var i = 0; i < rand.length; i++) {
        blanks += '_ ';
        console.log(blanks);
    } 
    var guessInputs = document.querySelectorAll('input[name="letter"]');
}













//    return rand;
// var rand = tryRandomWord();
//function getUnderscores(param) {
//}
// getUnderscores(rand);