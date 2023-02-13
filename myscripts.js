function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    let result = '';
    switch (true) {
        case (player === computer):
            result = 'Tie';
            break;
        case ((player === 'rock') && (computer === 'scissors')):
            result = 'You win! Rock beats scissors.';
            break;
        case ((player === 'paper') && (computer === 'rock')):
            result = 'You win! Paper beats rock.';
            break;
        case ((player === 'scissors') && (computer === 'paper')):
            result = 'You win! Scissors beats paper.';
            break;
        case ((computer === 'rock') && (player === 'scissors')):
            result = 'You lose! Rock beats scissors.';
            break;
        case ((computer === 'paper') && (player === 'rock')):
            result = 'You lose! Paper beats rock.';
            break;
        case ((computer === 'scissors') && (player === 'paper')):
            result = 'You lose! Scissors beats paper.';
            break;
    }
    return result;
}



function game(){
    let playerCounter = 0;//number of wins
    let computerCounter = 0;//number of wins for computer
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Select your fighter.");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        //check playRound return value, updates counters based on win, lose, tie
        console.log(result);
        if (result.includes('win')){
            playerCounter++;
        } else if (result.includes('lose')){
            computerCounter++;
        } else {
            playerCounter++;
            computerCounter++;
        }
    }
    //determine winner
    if (playerCounter === computerCounter){
        console.log("You tied, play again. There must be a champion");
    } else if (playerCounter >= 3){
        console.log("Congratulations you have won the game");
    } else {
        console.log("You lost the game! Prepare for your execution.");
    }
}

game();