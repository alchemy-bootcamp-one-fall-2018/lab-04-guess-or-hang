# Create an interactive Guess or Hang ("Hang Person") game

Create a word guessing game that:

1. Randomly selects a word from a list of words
1. Shows line blanks for each letter of the word that was selected
1. Allows the users to enter one letter "guess" at a time.
    1. If the guess is correct, show all occurances of that letter in the word
    1. If the guess is incorrect, add a body part to the gallows
1. Keep track of guessed letters
1. If the user guesses all of the letters in the word, let them know they have "won"
1. If the user has enough incorrect guesses to reveal the whole body in the gallows, they "lose"

## Details

### Structure

Your page needs to include the following parts:

1. Gallows - displays the parts of the body as the user guesses incorrectly.
2. Word to Guess - Blank lines for each letter in the word. Shows the letters when correctly guessed.
    * There are many ways to accomplish this
    * One way:
        * You will need as many letters as your longest word.
        * You can give an id like `letter-0`, `letter-1`, `letter-2`, etc. 
        * address by index, i.e. `document.getElementById('letter-' + i)`
3. Guess Letter - A form with an input and button for guessing a letter. You can use `maxlength="1"` attribute on the input to limit to one letter and `required` attribute to require at least one letter
    * Or you can come up with a different UI paradigm!
4. Letters Guessed - A list of letters guessed so far (correct and incorrect)
5. Number of Guesses - Shows how many total guesses have been made
6. Message - A place to show messages (like win or lose)

You have the freedom to modify the design as long as all the functionality is accounted for.

### Parts

#### Words

Create a file `words.js` that exposes a variable called words that is an array of possible words. 
Don't forget to include a script tag with `src` for this file _before_ the `app.js` file!

### App

Create a file `app.js` that exposes functions for running the game. 
Don't forget to include a script tag with `src` for this file.

1. Create a `loadWord` function that
    1. Gets a random integer between 0 (inclusive) and length of words (exclusive)
    1. Selects the word from the array with that index and store in a `word` variable for use by the guess function (`word` 
    will need to be scoped in way guess function can read.
    1. Set the visibility on the letters of the "Word to Guess" to hidden and fully hide 
    (no line blank) any unused letter spaces. (You might not hide them initially during development so you can "see" that
    word is loading correctly. Otherwise, you will need to inspect with the Dev Tools)
1. Create a `guess` function that
    1. Is called by the submit of the Guess Letter form
    1. Reads the letter from the Guess Letter input (either use form.elements, or directly reference the letter input by Id, as that is the only form control we care about).
    1. If letter guess is not a-z or A-Z, alert or message (via results output) user that letter is required. (Hint:
    you can use `.charCodeAt(0)` on your string value, or checkout regular expressions)
    1. Checks against letters already guessed and alerts or messages user that letter has already
    been guessed
    1. Otherwise:
        1. Letter is added to guessed letters
        1. Guess count is incremented
        1. Guess Letter input is reset to ''
        1. If word includes the letter (hint: string has an `includes` method):
            1. Letter(s) are revealed in Word to Guess
            1. Check for win condition (every letter of word is in guessed letters)
        1. If word does not include the letter:
            1. Add a body part to the gallows
            1. Check for lose condition (guesses count is max number of body parts)
        1. If win or lose condition:
            1. Message the user that they won or ~~died~~ lost
            1. Disable the Guess Letter button (button.disabled = true)
1. Call 'loadWord()` to start things
            
## Stretch Goals

Multiple Games!

1. Add a play game button that calls load word.
1. Keep track of wins and loses
1. Allow user to play again
1. Don't allow the play game button to be pressed if game is in progress

## Table Stakes

These must be in place for your lab to be graded:

1. Commit history showing pairing
1. Pass Travis
1. Deployed GH Pages

## Rubric

* Selects random word **2pts**
* Adjust "word guess" to right length and make correct guesses visibile **2pts**
* Can guess a letter, checks that hasn't been guessed **2pt**
* Tracks guessed letters **1pt**
* Tracks total guesses **1pt**
* Gallows displays incorrect guesses **2pt**
* Track game win or lose **2pt**
* Overall game play and creativity **2pt**
* Clean, Semantic HTML and CSS **2pt**
* Responsive Design **1pt**
* Clean, well-named JavaScript with use of functions **2pts**
* File naming and organization **1pt**
