$(document).ready(function(){

var winningNumber = generateWinningNumber();
var playersGuess;
var counter = 0;

// Generate the Winning Number

function generateWinningNumber(){
  return Math.floor(Math.random()*100);
}

// Fetch the Players Guess

$("form").on('submit',function(e){
  e.preventDefault();
  counter++;
  if (counter<=5){
    playersGuess = parseInt($(".form-control").val());
    $(".form-control").val("");
    if(counter===5){
      $("#mainone").text("No more guesses.");
    } else {
      $("#mainone").text("Guess #" + (counter+1));
    }
    checkGuess();
  } else {
    alert('Sorry, you are out of luck. Reset the game and try again.');
  }
});

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
  if ((playersGuess-winningNumber)>0){
    return "lower";
  } else {
    return "higher";
  }
}

// Check if the Player's Guess is the winning number

function checkGuess(){
  var temperature = "";
  if (Math.abs(playersGuess - winningNumber)<6){
    temperature = "lava hot, but.."
  } else if (Math.abs(playersGuess - winningNumber)<11){
    temperature = "warm, but.."
  } else if (Math.abs(playersGuess - winningNumber)<21){
    temperature = "cold"
  } else if (Math.abs(playersGuess - winningNumber)>20){
    temperature = "freezing cold"
  }
  if (playersGuess === winningNumber){
    $(".form-text").toggleClass("winState");
    $(".form-text").text("YOU WIN! Expect to receive $1 million after you email all your financial information and SSN (just for a proper background check) to trustus@wearetrustworthy.com.");
  } else {
    $(".form-text").text("Nope! You're " + temperature + ". No million dollars for you, haha! You have " + (5-counter) + " guesses left.");
  }
}

// Create a provide hint button that provides additional clues to the "Player"

$("#recommendation").on('click',function(e){
  e.preventDefault();
  alert('Guess a number somewhere between 1 and 100. Mwahahaha!')
});

$("#hint").on('click',function(e){
  e.preventDefault();
  if (lowerOrHigher()==="lower"){
    alert('You are too high.');
  } else {
    alert('You are too low.');
  }
});

// Allow the "Player" to Play Again

$("#resetBtn").on('click',function(e){
  e.preventDefault();
  winningNumber = generateWinningNumber();
  counter = 0;
  alert('The guess counter and winning number have been reset. You have 5 guesses just like before. Good luck!')
  $(".form-text").text("Guess! (You get 5 total.)");
})

/* **** Event Listeners/Handlers ****  */
});
