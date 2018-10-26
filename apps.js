// word bank
var words = ["cheese", "coffee", "park", "flower", "book"]; 

//load word randomly

var letter0 = document.getElementById('letter-0');
var letter1 = document.getElementById('letter-1');
var letter2 = document.getElementById('letter-2');
var letter3 = document.getElementById('letter-3');
var letter4 = document.getElementById('letter-4');
var letter5 = document.getElementById('letter-5');

function loadWord() {
    var copy = words.slice();
    
    var index = Math.floor(Math.random() * 4)
    console.log(index);

    function getRandomWord() {
        var word = copy[index];
        copy.slice(index, 1);
        return word;
        console.log(word);

    }

    var selectedWord = getRandomWord();
    //console.log(selectedWord);
    var wordArray = selectedWord.split('');
    console.log(wordArray);

    var test = wordArray.join('');
    var test2 = wordArray.join('-');

    console.log(test2);

//     for (var i = 0; i < wordArray.length; i++) {
//         letter[i].classList.add('blank-spaces');
//    }
}

loadWord();

// choose a random word

// make an array for the word

// loop for guess until the word in complete

// show answer until complete
    //show congrats or lose banner

// restart the game 