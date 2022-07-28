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
        whoWin = "tie"
    }
    else if(player === "rock" && computer === "scissors" || player === "scissors" && computer === "paper" || player === "paper" && computer === "rock"){
        whoWin = "player";
    }
    else{
        whoWin = "computer"
    }
    if(whoWin === "tie"){
        console.log("Tie! Both chosed " + player);
    }
    else if(whoWin === "player"){
        console.log("You Win! " + player.toLocaleUpperCase() + " beats " + computer.toLocaleUpperCase());
    }
    else{
        console.log("You Lose!" + computer.toLocaleUpperCase() + " beats " + player.toLocaleUpperCase());
    }
}
playRound();