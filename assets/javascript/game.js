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

    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
}


startGame()

//Main Process
//=====================================================