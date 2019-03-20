//GLOBAL VARIABLES (all functions)
//---------------------------------------------------------------------------------------------------

// Arra of Word Options (all lowercase)
var wordList=["lambirhini","toyota","nissan"];

// Solution will be held here
var chosenWord = "";

//this will break into individual letter to be stored in array
var lettersInChosenWord = [];

// This will be the number of blanks we show in the solution.
var numBlanks = 0;

// holds a mix of blanksand solve letters (ex: 'ap_ple');
var blanksAndSuccesses = [];

//wrong guesses
var wrongGuesses = [];


//Game Counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 0;


//FUCNTIONS
//---------------------------------------------------------------------------------------------------

// Note: startGame(); is not running here. just made for future use
function startGame(){

    //resets guesses back to original specified number.
    numGuesses = 9;

    //solution chosen ramdonly from wordlist.
    chosenWord = wordList[Math.floor(Math.random()*wordList.length)];

    //The word is broken into individual letters
    lettersInChosenWord = chosenWord.split(``);

    //count number of letter in a word
    numBlanks = lettersInChosenWord.length;

    //print the solution in console for testing.
    console.log(chosenWord);

    //CRITICAL LINE - here we reset the guess and succes array at each round
    blanksAndSuccesses = [];

    //CRITICAL LINE _ reset wrong guesses from previous round.
    wrongGuesses=[];

    //Fills the blanksandguesses 
    for(var i = 1; i < numBlanks + 1; i++){
        blanksAndSuccesses.push("_");
    }
    document.getElementById("guesses_left").innerHTML = numGuesses;

    //prints blanks at the begining of each round in the html
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join("  ＼(^ω ^＼)  ");


    //clears wrong guesses in last round
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}