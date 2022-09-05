//create variable to track player and computer win
let computerWin = 0;
let playerWin = 0;

/*
create a function getComputerChoice
  declare array of rock paper scissors
  decleare a integer variable which stores random number 0-2
  use the random number as array index to get the computer choice 
*/

function getComputerChoice(){
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomNum = Math.floor(Math.random()*3);
    return choice[randomNum];
}

/*
create a function playRound with parameter that takes player input and computer choice
  call function to get computer choice
  compare user input and computer choice by turning both into upper case
  return the result
*/

function playRound(playerSelection, computerSelection){
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        return `Draw both used ${computerSelection}`;
    }
    else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase()=='PAPER' 
    || playerSelection.toUpperCase()==='PAPER' && computerSelection.toUpperCase()=='SCISSORS' 
    || playerSelection.toUpperCase()==='SCISSORS' && computerSelection.toUpperCase()==='ROCK'){
        computerWin++;
        return `You lose! ${computerSelection} beats ${playerSelection} `;
    }
    else{
        playerWin++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

/*
create function game
  ask for user input
  pass the user input and computer to playRound and call it for 5 times
*/

function game(){
    for(let i=0; i<5; i++){
        const playerSelection = prompt('Enter Rock, Paper or Scissors: ')
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }
    let winner;
    if (computerWin == playerWin){
        console.log('Draw')
    }
    else{
        winner = playerWin > computerWin? 'You' : 'Computer';
        console.log(`Winner: ${winner}`)
    }
}
game()