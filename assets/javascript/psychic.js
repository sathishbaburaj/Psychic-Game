//variable for computer guesses
var computerGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
//variables for counting wins,losses,numer of guesses left and already guessed letters
var wins = 0;
var losses = 0;
var numGuesses = 15;
var guessChoices = [];

// creating function to play the game

document.onkeyup = function (event) {

    // placing the key pressed in the userGuess variable
    var userGuess = event.key;

    // generating a random alphabet from array of computerGuesses
    var computerGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
    //creating a variable to select possible options for alphabet also doen't count if user presses any other key
    var options =  computerGuesses.slice();
    // checking key pressed is in the options array or not
    if (options.indexOf(userGuess) > -1) {
        // checking if user guess matches with computer guess then increase wins by 1 and decrease the number of guess by 1 and resetting the array of guessed letters
        if (userGuess === computerGuess) {
            wins++;
            numGuesses = 15;
            guessChoices = [];
        }
        //  if user guess doesn't matche with computer guess then increase losses by 1 and decrease the number of guess by 1 and pushing  guessed letters into guessChoices array

        if (userGuess != computerGuess) {
            numGuesses--;
            guessChoices.push(userGuess);
        }
        // if user exhausts number of guesses then reset number of guesses and guessChoices to start the game again
        if (numGuesses === 0) {

            numGuesses = 15;
            losses++;
            guessChoices = [];
        }
        // displaying the results
        var display =
            "<h1> The Psychic Game </h1>" +
            "<p>Guess what letter I'm thinking of!</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + numGuesses + "</p>" +
            "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

        document.querySelector("#psychic").innerHTML = display;



    }
};



