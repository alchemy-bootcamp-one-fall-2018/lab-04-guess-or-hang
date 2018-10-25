
function tryRandomWord() {
    var words = ['skiing', 'jogging', 'aerobics', 'cycling', 'paddling'];

    var rand = words[Math.floor(Math.random() * words.length)];
    console.log('random word-', rand);

    return rand;
}
var rand = tryRandomWord();

function getUnderscores(param) {
    var wordLength = param.length;
    console.log('word length-', wordLength);

}

getUnderscores(rand);



