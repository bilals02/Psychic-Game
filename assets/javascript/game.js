/* 
1. Event listener on keyup event
2. function to check if we have a letter match 
3. Update score and change UI
4. function to restart the game 
5. capture another random letter in memory (keep the score) 
*/

var refDataBank = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var randomLetter;

function NewRandom() {
    randomLetter = refDataBank[Math.floor(Math.random()*refDataBank.length)];
    console.log(randomLetter);
}

//Generate Random Number
NewRandom();

//Scoreboard Variables
var Wins = 0;
var Losses = 0;
var GameCounter = 0;
var TotalAttempts = 5;

document.onkeyup = function(event){ 
    //Capture key pressed by user
    var keyPressed = event.key;
    console.log(keyPressed);

    //Determine it is a letter
    if (refDataBank.indexOf(keyPressed.toUpperCase()) === -1){
        alert("Make sure to only enter a letter, try again!");
    }else{
    //show letter to user, comma delimited
    document.getElementById("userGuess").innerHTML = "<p>"+ keyPressed +"</p>";
    
    //compare the guess with computer generated letter
    if (keyPressed.toUpperCase() === randomLetter){
        //update scoreboard for win++
        win_now();
        }else{
            loss_now();
        }
    }
    

function loss_now(){
    Losses++;
    GameCountCheck();
    document.getElementById("card_Loses").innerHTML = "<p>"+ Losses + "</p>";
    document.getElementById("card_GuessLeft").innerHTML = "<p>"+ TotalAttempts +"</p>";
    NewRandom();
}

function win_now(){
    Wins++;
    GameCountCheck();
    document.getElementById("card_Wins").innerHTML = "<p>"+ Wins +"</p>";
    document.getElementById("card_GuessLeft").innerHTML = "<p>"+ TotalAttempts +"</p>";
    NewRandom();
}

function GameCountCheck () {
    GameCounter++;
    TotalAttempts--;
    if (GameCounter === 5){
        alert("You can only play 5 times!");
        ResetGame();
    }
}

function ResetGame() {
    GameCount = 0;
    Wins = 0;
    Losses = 0;
    TotalAttempts = 5;
    document.getElementById("card_GuessLeft").innerHTML = "<p>" +"</p>";
    document.getElementById("card_Wins").innerHTML = "<p>"+ 0 +"</p>";
    document.getElementById("card_Loses").innerHTML = "<p>"+ 0 +"</p>";
    document.getElementById("userGuess").innerHTML = "<p>" + "</p>";




}


    

};
