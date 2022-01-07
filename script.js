//keep score
let playerScore = 0;
let computerScore = 0;

let playerPlay ='';

//display winner and loser messages
const roundMessage = document.querySelector("#message")
const gameMessage = document.querySelector("#finalMessage")

//get computer choice
function computerPlay() {
    let choose = Math.floor(Math.random() * 3 + 1)
    if (choose == 1) {
        return "rock";
    }
    else if (choose == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//display score
const playerScoreUI = document.querySelector('#playerScore');
const computerScoreUI = document.querySelector('#computerScore');
playerScoreUI.innerHTML = playerScore;
computerScoreUI.innerHTML = computerScore;

//make buttons for user choice work
const rpsButtons = document.querySelectorAll('.rpsSelection')
rpsButtons.forEach((rpsButton) => {
    rpsButton.addEventListener("click", () => {
        playerPlay = rpsButton.innerHTML;
        return playerPlay;
    })
})

//compare user choice to computer choice
function playRound(playerChoice, computerChoice){
    if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock" || playerChoice == "paper" && computerChoice == "rock"){
        playerScore ++
        return "You win!" 
    }
    else if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "paper"){
        computerScore ++
        return "You lose :("  
    }
    else {
        return "You tied." 
    }
}

function game(){
    console.log(playRound(playerPlay, computerPlay()));
    if (playerScore > computerScore) {
        console.log(`YOU WON`);
    }
    else if (computerScore > playerScore){
        console.log(`You lost :(`);
    }
    else {
        console.log(`You tied. Play again.`);
    }
}


//get user choice
// function playerPlay(){
//     let playerPlay = prompt("rock paper or scissors?")
//     playerPlay = playerPlay.toLowerCase();
//     return playerPlay;
// }