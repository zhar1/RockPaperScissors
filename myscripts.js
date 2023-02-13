function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection;
    const computer = computerSelection;
    let result = '';
    switch (true) {
        case (player.toLowerCase() === computer.toLowerCase()):
            result = 'Tie';
            break;
        case ((player.toLowerCase() === 'rock') && (computer.toLowerCase() === 'scissors')):
            result = 'You win! Rock beats scissors.';
            break;
        case ((player.toLowerCase() === 'paper') && (computer.toLowerCase() === 'rock')):
            result = 'You win! Paper beats rock.';
            break;
        case ((player.toLowerCase() === 'scissors') && (computer.toLowerCase() === 'paper')):
            result = 'You win! Scissors beats paper.';
            break;
        case ((computer.toLowerCase() === 'rock') && (player.toLowerCase() === 'scissors')):
            result = 'You lose! Rock beats scissors.';
            break;
        case ((computer.toLowerCase() === 'paper') && (player.toLowerCase() === 'rock')):
            result = 'You lose! Paper beats rock.';
            break;
        case ((computer.toLowerCase() === 'scissors') && (player.toLowerCase() === 'paper')):
            result = 'You lose! Scissors beats paper.';
            break;
    }
    return result;
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));