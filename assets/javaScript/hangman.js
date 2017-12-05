// GLOBAL VARIABLES

// ---------------------------------------------------------------------------------------------------

// Arrays holding data 
var wordOptions = ["goku", "gohan", "vegeta", "frieza", "trunks", 'bullma', "piccolo", 'cell', "goten", "krillin"];
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
    document.getElementById()


    // Debugging 
    console.log(selectedWord);
    console.log(lettersinWords);
    console.log(numBlanks);
    console.log(blankAndSuccesses);
}
// Main Process
// ---------------------------------------------------------------------------------------------------
startGame();