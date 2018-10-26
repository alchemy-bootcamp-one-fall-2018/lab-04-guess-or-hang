var words = ['skiing', 'jogging', 'aerobics', 'cycling', 'paddling'];

function tryRandomWord() {

    var rand = words[Math.floor(Math.random() * words.length)].split('');
    console.log('random word-', rand);

    var wordLength = rand.length;
    console.log('word length-', wordLength);

    var blanks = [];
    for(var i = 0; i < rand.length; i++) {
        blanks.push('__');
        console.log(blanks);
    }
    var guessInputs = document.getElementById('input[name="letter"]');
    for(var i = 0; i < rand.length; i++) {
        if(guessInputs === rand[i]); 
         blanks.splice(i, 1, rand[i]);
        console.log(blanks);


    }




}













//    return rand;
// var rand = tryRandomWord();
//function getUnderscores(param) {
//}
// getUnderscores(rand);