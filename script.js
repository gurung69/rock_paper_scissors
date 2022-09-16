//create variable to track player and computer win
let computerWin = 0;
let playerWin = 0;

function getComputerChoice(){//get the computer selection
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomNum = Math.floor(Math.random()*3);//picks number from 0-2
    return choice[randomNum];
}

function playRound(e){//rps is played whenever user click on the options
    const playerSelection = e.target.value.toUpperCase();
    const computerSelection = getComputerChoice().toUpperCase();
    if (playerSelection === computerSelection.toUpperCase()){
        return `Draw both used ${computerSelection}`;
    }
    else if (playerSelection === 'ROCK' && computerSelection =='PAPER' 
    || playerSelection==='PAPER' && computerSelection =='SCISSORS' 
    || playerSelection ==='SCISSORS' && computerSelection ==='ROCK'){
        computerWin++;
    }
    else{
        playerWin++;
    }
    playerPoint.textContent = playerWin;
    computerPoint.textContent = computerWin;
    if (computerWin >= 5 || playerWin >= 5){//checks the winner if computer or player wins 5 round
        if(computerWin > playerWin){
            displayWinner.innerHTML = `Computer Wins`;
        }
        else{
            displayWinner.innerHTML = `You Win`;
        }
        [computerWin, playerWin] = [0,0];
    }
}

const selections = document.querySelectorAll('.selection');
const playerPoint = document.querySelector('.player-point');
const computerPoint = document.querySelector('.computer-point');
const displayWinner = document.querySelector('.winner');

selections.forEach(selection => selection.addEventListener('click', playRound))