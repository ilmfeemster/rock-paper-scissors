//keep score
let playerScore = 0;
let computerScore = 0;

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

//get user choice
function playerPlay(){
    let playerPlay = prompt("rock paper or scissors?")
    playerPlay = playerPlay.toLowerCase();
    return playerPlay;
}


//compare user choice to computer choice
function playGame(playerChoice, computerChoice){
    if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock" || playerChoice == "paper" && computerChoice == "rock"){
        playerScore ++
        return "You win! " + `${playerChoice} beats ${computerChoice} | ` + `Player:${playerScore} to Computer:${computerScore}`;
    }
    else if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "paper"){
        computerScore ++
        return "You lose :( .  " + `${computerChoice} beats ${playerChoice} | ` + `Player:${playerScore} to Computer:${computerScore}`;
    }
    else {
        return "You tied. | " + `Player:${playerScore} to Computer:${computerScore}`;
    }
}

function game(){
    console.log(playGame(playerPlay(), computerPlay()));
    console.log(playGame(playerPlay(), computerPlay()));
    console.log(playGame(playerPlay(), computerPlay()));
    console.log(playGame(playerPlay(), computerPlay()));
    console.log(playGame(playerPlay(), computerPlay()));
    if (playerScore > computerScore) {
        console.log(`YOU WON ${playerScore} to ${computerScore}!!!`);
    }
    else if (computerScore > playerScore){
        console.log(`You lost :( ${playerScore} to ${computerScore}`);
    }
    else {
        console.log(`You tied ${playerScore} to ${computerScore}. Play again.`);
    }
}
game();
