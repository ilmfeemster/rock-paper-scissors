//keep and display score
let playerScore = 0;
let computerScore = 0;
const playerScoreUI = document.querySelector('#playerScore');
const computerScoreUI = document.querySelector('#computerScore');

let playerPlay ="";
let roundStatus = "Select your choice.";
let gameStatus = "Who will win?"

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


//make buttons for user choice work
const rpsButtons = document.querySelectorAll('.rpsSelection')
rpsButtons.forEach((rpsButton) => {
    rpsButton.addEventListener("click", () => {
        playerPlay = rpsButton.innerHTML;
        playerPlay = playerPlay.toLowerCase();
        game();
    })
})

//declare round winner and update score and round messages
function playRound(playerChoice, computerChoice){
    playerScoreUI.innerHTML = playerScore;
    computerScoreUI.innerHTML = computerScore;
    roundMessage.innerHTML = roundStatus;
    if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock" || playerChoice == "paper" && computerChoice == "rock"){
        playerScore ++
        roundStatus = "You win! " + `${playerChoice} beats ${computerChoice}`
    }
    else if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "paper"){
        computerScore ++
        roundStatus = "You lose :( .  " + `${computerChoice} beats ${playerChoice}`;
    }
    else {
        roundStatus = "You tied.";
    }
}
function game(){
    gameMessage.innerHTML = gameStatus;
    if (playerScore == 5){
        playerScoreUI.innerHTML = playerScore;
        gameStatus = "YOU WIN!";
        gameMessage.innerHTML = gameStatus;
    }
    else if (computerScore == 5){
        computerScoreUI.innerHTML = computerScore;
        gameStatus = "Try again.";
        gameMessage.innerHTML = gameStatus;
    }
    else{
    playRound(playerPlay, computerPlay());
    }
}
