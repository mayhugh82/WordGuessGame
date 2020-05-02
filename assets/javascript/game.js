//Global Variables
//=====================================================
//Arrays and Variables for holding data
var wordOptions = ["moana", "tarzan", "cinderella", "cars","aladdin", "nemo", "ariel", "aurora", "simba"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//Game counters
var WinCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// Functions (Resusable blocks of code that I will call upon when needed)=====================================================
function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    //reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //Populate blanks and successes with right number of blanks.
    for (var i=0; i<numBlanks; i++){
        blanksAndSuccesses.push("-");
    }

    //Change HTML to reflect round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = WinCount
    document.getElementById("lossCounter").innerHTML = lossCount

    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetter(letter) {
    //check if letter exists in code at all
    var isLetterInWord = false;

    for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] === letter) {
            isLetterInWord = true;
        }
    }

    //check where in the word the letter exists, then populate our blanksAndSuccesses array.
    if(isLetterInWord){
    for (var i=0; i<numBlanks; i++){
        if(selectedWord[i] === letter) {
            blanksAndSuccesses[i] = letter;
        }
    }
}

else {
    wrongLetters.push(letter);
    guessesLeft --
}

console.log(blanksAndSuccesses);

}

function roundComplete(){
    console.log("Win Count:" + WinCount + " | Loss Count: " + lossCount + " | Guesses Left");

    //check if user won
    if(lettersinWord.toString() === blanksAndSuccesses.toString()) {
        WinCount++;
        alert("You Won!");

        document.getElementById("winCounter").innerHTML = WinCount;

        startGame();
        //check if user lost
    } else {        
        lossCount++
        alert('You loose');
        }


    }

    


//Main Process
//=====================================================

//Initiates the code the first time
startGame();

//Register keyclicks

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetter(letterGuessed);
    roundComplete();

    console.log(letterGuessed)
}