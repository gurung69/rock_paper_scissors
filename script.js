//create variable to track player and computer win
let computerWin = 0;
let playerWin = 0;

function getComputerChoice(){//get the computer selection
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomNum = Math.floor(Math.random()*3);//picks number from 0-2
    return choice[randomNum];
}

function playRound(e){
    const playerSelection = e.target.value.toUpperCase();
    const computerSelection = getComputerChoice().toUpperCase();
    if (playerSelection === computerSelection.toUpperCase()){
        return `Draw both used ${computerSelection}`;
    }
    else if (playerSelection === 'ROCK' && computerSelection =='PAPER' 
    || playerSelection==='PAPER' && computerSelection =='SCISSORS' 
    || playerSelection ==='SCISSORS' && computerSelection ==='ROCK'){
        computerWin++;
        displayResult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
    }
    else{
        playerWin++;
        displayResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`
    }
    if (computerWin + playerWin >= 5){
        displayResult.innerHTML = `<div class='score'>Your Win: ${playerWin} Computer Win: ${computerWin}</div>`
        if(computerWin > playerWin){
            displayResult.innerHTML += `<div class = winner>Computer Win</div>`
        }
        else{
            displayResult.innerHTML += `<div class = winner>You Win</div>`
        }
        [computerWin, playerWin] = [0,0];
    }
}

const selections = document.querySelectorAll('.selection');
const displayResult = document.querySelector('.result');

selections.forEach(selection => selection.addEventListener('click', playRound))