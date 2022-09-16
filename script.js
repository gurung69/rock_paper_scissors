//create variable to track player and computer win
let computerWin = 0;
let playerWin = 0;

function getComputerChoice(){//get the computer selection
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomNum = Math.floor(Math.random()*3);//picks number from 0-2
    return choice[randomNum];
}

function getWinner(playerSelection, computerSelection){//increment the score accoriding to who wins
    if (playerSelection === 'ROCK' && computerSelection =='PAPER' 
    || playerSelection==='PAPER' && computerSelection =='SCISSORS' 
    || playerSelection ==='SCISSORS' && computerSelection ==='ROCK'){
        computerWin++;
    }
    else{
        playerWin++;
    }
    displayPoint();
}

function displayPoint(){//display points of playerWIn and ComputerWin
    playerPoint.textContent = playerWin;
    computerPoint.textContent = computerWin;
}

function playRound(e){//rps is played whenever user click on the options
    const playerSelection = e.target.value.toUpperCase();
    const computerSelection = getComputerChoice().toUpperCase();
    getWinner(playerSelection, computerSelection);
    if (computerWin >= 5 || playerWin >= 5){//checks the winner if computer or player wins 5 round
        toogleHidden();
        if(computerWin > playerWin){
            displayWinner.innerHTML = `Computer Wins`;
        }
        else{
            displayWinner.innerHTML = `You Win`;
        }
        [computerWin, playerWin] = [0,0];
    }
}

function toogleHidden(){//toggle hidden class
    selectionBox.classList.toggle('hidden');
    playAgain.classList.toggle('hidden');
}

function newRound(){//toogle hidden class and set points back to 0 0
    toogleHidden();
    displayPoint();
}

const selectionBox = document.querySelector('.selections')
const selections = document.querySelectorAll('.selection');
const playerPoint = document.querySelector('.player-point');
const computerPoint = document.querySelector('.computer-point');
const displayWinner = document.querySelector('.winner');
const playAgain = document.querySelector('.play-again');
const newGame = document.querySelector('.new-game');
const gameFinished = false;

selections.forEach(selection => selection.addEventListener('click', playRound));
newGame.addEventListener('click', newRound);//starts new round of rps