const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const choices = [rock ,paper, scissors];
const playerPointDisplay = document.querySelector('.player-score-number');
const tiePointDisplay = document.querySelector('.tie-score');
const computerPointDisplay = document.querySelector('.computer-score-number');
const img = document.querySelector('.choice1');
const img2 = document.querySelector('.choice2');
const buttons = document.querySelectorAll('.player-choice-button');
const midText = document.querySelector('.mid-text');
const roundNumberDisplay = document.querySelector('.round-number');
const playAgain = document.querySelector('.play-again');

let playerSelection;
let computerSelection;
let playerPoint= 0;
let tiePoint = 0;
let computerPoint = 0;
let roundWinner;
let roundNumber = 1;

choices.forEach(choice => choice.addEventListener('click', (e) => {
    playerSelection = e.target.id;
    roundNumber++;
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    imgChangeComputer(computerSelection);
    changeMidText ();
    gameStop(playerPoint, computerPoint);
    changeRoundNum (roundNumber)
}));


function changeMidText (){
    if (winner === "tie") {
        midText.innerText ='DRAW';
    } else if (winner === "computer") {
        midText.innerText ='YOU LOSE';
    } else if (winner === "player") {
        midText.innerText ='YOU WON';
    }

    if (playerPoint == 5) {
        midText.innerText ='YOU WON THE GAME';
    } else if (computerPoint == 5) {
        midText.innerText ='YOU LOSE THE GAME';
    }

}

rock.addEventListener('click', () => {
    img.src = './resources/rock-player.png'
});
    
paper.addEventListener('click', () => {
    img.src = './resources/paper-player.png'
});
    
scissors.addEventListener('click', () => {
    img.src = './resources/scissors-player.png' 
});


function imgChangeComputer(computerSelection){
    if (computerSelection === "rock") {
        {img2.src = './resources/rock-comp.png'}
    } else if (computerSelection === "paper") {
        {img2.src = './resources/paper-comp.png'}
    } else if (computerSelection === "scissors"){
        {img2.src = './resources/scissors-comp.png'}
    }
}




function computerPlay(){ 
    let pick = Math.floor((Math.random() * 3) + 1);
    if (pick === 1) {
        return "rock";
    } else if (pick === 2) {
        return "paper";
    } else if (pick === 3) {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "scissors")
        ) {
            winner = "tie"
            tiePoint++;
            tiePointDisplay.innerText = tiePoint;

    } else if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
        ) {
            winner = "computer"
            computerPoint++;
            computerPointDisplay.innerText = computerPoint;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            winner = "player"
            playerPoint++;    
            playerPointDisplay.innerText = playerPoint;
    } 
}    


function gameStop() {
    if (playerPoint == 5 || computerPoint == 5) {
        buttons[0].disabled = true;
        buttons[1].disabled = true;
        buttons[2].disabled = true;
        
        playAgain.style.display = 'block';
    }
};

function changeRoundNum (roundNumber){
    roundNumberDisplay.innerText = 'ROUND ' + `${roundNumber}`
}

playAgain.addEventListener('click', () => {
    playAgain.style.display = 'none';
    roundNumber = 1;
    playerPoint= 0;
    tiePoint = 0;
    computerPoint = 0;
    roundNumberDisplay.innerText = 'ROUND 1';
    img.src = './resources/rock-player.png';
    img2.src = './resources/rock-comp.png';
    midText.innerText = "CHOOSE YOUR WEAPON";
    buttons[0].disabled = false;
    buttons[1].disabled = false;
    buttons[2].disabled = false;
    playerPointDisplay.innerText = 0;
    tiePointDisplay.innerText = 0;
    computerPointDisplay.innerText = 0;
})

