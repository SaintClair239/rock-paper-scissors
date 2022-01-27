let playerSelection;
let computerSelection;
let playerPoint = 0;
let computerPoint = 0;

//Lets the computer choose rock paper scissors randomly
function computerPlay (){ 
    let pick = Math.floor((Math.random() * 3) + 1);

    if (pick === 1) {
        return "rock";
    } else if (pick === 2) {
        return "paper";
    } else if (pick === 3) {
        return "scissors";
    }
}

//Plays the game; returns true if player wins; returns false if lose; returns === draw otherwise
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose your weapon!");
    computerSelection = computerPlay();
        if (playerSelection === "rock" && computerSelection === "rock") {
            playerPoint;
            computerPoint;
            console.log ("Its a draw! You chose rock and computer chose rock");
            console.log ("player point is " + playerPoint  +" " + "while computer point is " + computerPoint);
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            playerPoint;
            computerPoint++;
            console.log ("You lose! You chose rock and computer chose paper!");
            console.log ("player point is " + playerPoint  +" " + "while computer point is " + computerPoint);
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerPoint++;
            computerPoint;
            console.log ("You won! You chose rock and computer chose scissors");
            console.log ("player point is " + playerPoint  +" " + "while computer point is " + computerPoint);
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerPoint++;
            computerPoint;
            console.log ("You won! You chose paper and computer chose rock")
            console.log ("player point is " + playerPoint  +" " + "while computer point is " + computerPoint);
        } else if (playerSelection === "paper" && computerSelection === "paper") {
            playerPoint;
            computerPoint;
            console.log ("Draw! You chose paper and computer chose paper")
            console.log ("player point is " + playerPoint  +" " + "while computer point is " + computerPoint);
        }  else if (playerSelection === "paper" && computerSelection === "scissors") {
            playerPoint;
            computerPoint++;
            console.log  ("You lose! You chose paper and computer chose scissors!")
            console.log ("player point is " + playerPoint  +" " + "while computer point is " + computerPoint);
        }  else if (playerSelection === "scissors" && computerSelection === "rock") {
            playerPoint;
            computerPoint++;
            console.log ("You lose! You chose scissors and computer chose rock")
            console.log ("player point is " + playerPoint  +" " + "while computer point is " + computerPoint);
        }  else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerPoint++;
            computerPoint;
            console.log ("You won! You chose scissors and computer chose paper")
            console.log ("player point is " + playerPoint  +" " + "while computer point is " + computerPoint);
        }  else if (playerSelection === "scissors" && computerSelection === "scissors") {
            playerPoint;
            computerPoint;
            console.log ("Draw! You chose scissors and computer chose scissors")
            console.log ("player point is " + playerPoint  +" " + "while computer point is " + computerPoint);
        }  
}

//loops the game 5 times
function game (){
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    
    if (playerPoint>computerPoint) {
        console.log ("Congratulations! You won!")
    } else {
        console.log ("Better luck next time!")
    }
}

game();





