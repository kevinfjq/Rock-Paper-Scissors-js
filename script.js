//create options array
const option = ["rock","paper","scissors"]
//get computer choice by random function
function getComputerChoice(){
    let computerChoice = option[Math.ceil(Math.random()*3)-1];
    return computerChoice;
}
//get player choice
function getPlayerChoice(){
    let playerChoice = prompt("Rock, Paper or Scissors? ").toLowerCase();
    if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
        return playerChoice;
    }
    else{
        console.log("Invalid option, try again: ");
        return getPlayerChoice();
    }
}
//Set rounds
function playRound(){
    let player = getPlayerChoice();
    let computer = getComputerChoice();
    let whoWin;
    console.log(computer);
    if(player === computer){
        whoWin = "tie";
        console.log("Round: Tie! Both chosed " + player);
    }
    else if(player === "rock" && computer === "scissors" || player === "scissors" && computer === "paper" || player === "paper" && computer === "rock"){
        whoWin = "player";
        console.log("Round: You Win! " + player.toLocaleUpperCase() + " beats " + computer.toLocaleUpperCase());
    }
    else{
        whoWin = "computer";
        console.log("Round: You Lose! " + computer.toLocaleUpperCase() + " beats " + player.toLocaleUpperCase());
    }
    return whoWin;
}
//Make function that start game
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let result = playRound();
        if(result === "player"){
            playerScore ++;
        }
        else if(result === "computer"){
            computerScore ++;
        }
        else{
            i--;
        }
        console.log("Player: " + playerScore + "\nComputer: " + computerScore);
        if(playerScore === 3){
            console.log("Player Wins!");
            return;
        }
        else if(computerScore == 3){
            console.log("Computer Wins!");
            return;
        }
    }
}
game();