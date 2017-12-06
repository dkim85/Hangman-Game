
// GLOBAL VARIABLES

// ---------------------------------------------------------------------------------------------------

// Arrays holding data 
var wordOptions = ["javaScript", "json", "jquery", "react", "node", "angular", "css","practice", "bootstrap"];
var selectedWord = "";
var lettersinWords = [];
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongLetters = [];

// Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// Functions
// ---------------------------------------------------------------------------------------------------
function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWords = selectedWord.split("");
    numBlanks = lettersinWords.length;

    // Rset
    guessesLeft = 9;
    wrongLetters = [];
    blankAndSuccesses = [];

    // Populate blanks and succeses with right #s of blanks
    for (var i=0; i<numBlanks; i++){
        blankAndSuccesses.push("_");
        }

    // Change HTML to reflect round conditions
    document.getElementById("wordToGuess").innerHTML = blankAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    // Debugging 
    console.log(selectedWord);
    console.log(lettersinWords);
    console.log(numBlanks);
    console.log(blankAndSuccesses);
}

function checkLetters(letter) {
    // check if letter exists at all
    var isLetterInWord = false;
    for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] == letter){
            isLetterInWord = true;
        }
    }
// check where the word exists
if(isLetterInWord){   
    for (var i=0; i<numBlanks; i++) {
        if(selectedWord[i] == letter) {
            blankAndSuccesses[i] = letter;
        }
    }
}

else {
    wrongLetters.push(letter);
    guessesLeft--
}
// Debugging
console.log(blankAndSuccesses);
}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + numGuesses);
}

// Main Process
// ---------------------------------------------------------------------------------------------------
// Initiate the code
startGame();

// registering keyclicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    // debugging
    console.log(letterGuessed);
}