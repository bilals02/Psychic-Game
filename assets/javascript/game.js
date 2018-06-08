/* 
1. Event listener on keyup event
2. function to check if we have a letter match 
3. Update score and change UI
4. function to restart the game 
5. capture another random letter in memory (keep the score) 
*/

var refDataBank = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var randomLetter = refDataBank[Math.floor(Math.random()*refDataBank.length)];
console.log(randomLetter);

//Scoreboard Variables
var Wins = 0;
var Losses = 0;

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
            Wins++;

        }
    }

    //Compare user entered letter with Computer generated letter

    

};
