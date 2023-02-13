function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function playRound(computerSelection, playerSelection){
    const player = playerSelection;
    const computer = computerSelection;
    let result = '';
    if (player.toLowerCase() === computer.toLowerCase){
        result = 'Tie';
    } 
    //winning statements
    //losing statements
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();