// alert('test');
// GLOBAL VARIABLES

// ---------------------------------------------------------------------------------------------------

// Arrays holding data 
var wordOptions = ["javascript", "json", "jquery", "react", "node", "angular", "css","practice", "bootstrap"];
var selectedWord = "";
var lettersinWords = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
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
    blanksAndSuccesses = [];

    // Populate blanks and succeses with right #s of blanks
    for (var i=0; i<numBlanks; i++){
        blanksAndSuccesses.push("_");
        }

    // Change HTML to reflect round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    // Debugging 
    console.log(selectedWord);
    console.log(lettersinWords);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
    // check if letter exists at all
    var isLetterInWord = false;
    for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] == letter){
            isLetterInWord = true;
            // alert('letter found');
        }
    }
    // check where the word exists
    if(isLetterInWord) {   
        for (var i=0; i<numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    // letter no found
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }
    // Debugging
    console.log(blanksAndSuccesses);
}

function roundComplete(){
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + numGuesses);

    // Update and reflect HTML scores & status
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
    // check if user won
    if (lettersinWords.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        // alert("you won");

        // update the win counter in HTMML
        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    }

    else if (guessesLeft == 0){
        lossCount++;
        // alert("you lost");
    // HTML update
    document.getElementById("lossCounter").innerHTML = lossCount;

    startGame();
    }
}

// Main Process
// ---------------------------------------------------------------------------------------------------
// Initiate the code
startGame();

// registering keyclicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    // testing
    // console.log(letterGuessed);
    checkLetters(letterGuessed);
    roundComplete();
    // debugging
    // console.log(letterGuessed);
}