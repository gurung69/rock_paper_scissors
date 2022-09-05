/*
creeate a function getComputerChoice
  declare array of rock paper scissors
  decleare a integer variable which stores random number 0-2
  use the random number as array index to get the computer choice 
*/

function getComputerChoice(){
    const choice = ['Rock', 'Paper', 'Scissors'];
    let randomNum = Math.floor(Math.random()*3);
    return choice[randomNum];
}