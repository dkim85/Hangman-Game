var gameState = {
    currentWord: [],
    formatedWord: [],
    wins: 0,
    remainingGuesses: 10,
    status: "",
    lettersUsed: []
};

function game(guess) {

   // Paso 1 Iniciar juego---------------------------------------------
    document.getElementById("status-bar").textContent = "Ok. Guess a letter.";
    document.getElementById("wins").textContent = " " + gameState.wins;

   // Paso 2 Adivinar una letra---
    if (gameState.currentWord.length === 0) {
        let wd = getWord();
        gameState.currentWord = wd.split("");
        document.getElementById("gohan").src = "assets/images/furiousgohan.gif"
    }

   // Paso 3 Agregar las letras en los letreros------------------
    paintWord();

   // Paso 4 Palabras adivinadas , palabras puestas-----
    console.log("Guessed: " + guess);
    if (gameState.lettersUsed.indexOf(guess) !== -1) {
        document.getElementById("status-bar").textContent = "You guessed this already. Try again."
    } else {
        gameState.lettersUsed.push(guess);

       --gameState.remainingGuesses;

       
       if (gameState.currentWord.indexOf(guess) !== -1) {
            for (var i = 0; i < gameState.formatedWord.length; i++) {
                if (gameState.currentWord[i] === guess) {
                    gameState.formatedWord[i] = guess;
                }
            }
        } else {
            document.getElementById("status-bar").textContent = "You belong to the human race! shame"
        }
    }

   document.getElementById("remaining").textContent = " " + gameState.remainingGuesses;

   // Paso 5 Actualizar-------------------------
    paintWord();

   // Uactualizar cuando el usuario adivina---------------------------------------
    if (gameState.currentWord.join(" ") === gameState.formatedWord.join(" ")) {
        document.getElementById("bender").src = "assets/images/furiousgohan.gif"
        gameState.status = "winner";
    }

   //Verificar si el usuario ha ganado-----------------------------------------------------
    checkState();
}

function checkState() {
    if (gameState.remainingGuesses <= 0) {
        document.getElementById("status-bar").textContent = "Guess a letter to play again.";
        document.getElementById("current-word").textContent = "Bulma doesn't want to have kids with you!"
        gameState.currentWord = [];
        gameState.formatedWord = [];
        gameState.lettersUsed = [];
        gameState.status = "";
        gameState.remainingGuesses = 10;
    }

   if (gameState.status === "winner") {
        // si ha ganado, reiniciar todo
        document.getElementById("status-bar").textContent = "Guess a letter to play again.";
        document.getElementById("current-word").textContent = "You're a SAYAYIN!!!!"
        gameState.currentWord = [];
        gameState.formatedWord = [];
        gameState.lettersUsed = [];
        gameState.status = "";
        gameState.remainingGuesses = 10;
        ++gameState.wins;
    }
}

function getWord() {
    var words = ["gohan", "goku", "vegeta", "dragon", "freezer", "cell", "android"];
    var num = Math.floor(Math.random() * words.length);
    for (var i = 0; i < words[num].length; i++) {
        gameState.formatedWord.push(" ___ ");
    }
    return words[num];
}

function paintWord() {
    var str = "";

   document.getElementById("current-word").textContent = " " + gameState.formatedWord.join("  ");

   for (var i = 0; i < gameState.lettersUsed.length; i++) {
        str += " " + gameState.lettersUsed[i];
    }
    document.getElementById("lettersUsed").textContent = str;
}

document.onkeypress = function(e) {
    game(e.key);
}


////// Screen don't show letter command~~~~~ life is miserable sometimes... Under revision as of 10/21