const btn = document.querySelectorAll("button");
const resultsDiv = document.querySelector(".results");
let playerScore = 0;
let computerScore = 0;
let result = '';
let winningString = 'Congratulations you have won the series';
let losingString = 'You lost, play again?';

//computer selects cchoice at random
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function playRound(playerSelection){
    const player = playerSelection.toLowerCase();
    const computer = getComputerChoice().toLocaleLowerCase();
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

//if game has been won reset score and clear div.results content
function resetGame(){
    if(playerScore === 5 || computerScore === 5){
        playerScore = 0;
        computerScore = 0;
        resultsDiv.textContent = '';
    }
}

//returns empty string until winner has been decided
function determineWinner(){
   if (playerScore === 5){
        return winningString;
   } else if (computerScore === 5){
        return losingString;
   } else {
        return '';
   }
}

//returns true if player wins and false if computer wins
function round(result){
    if (result.includes('win')){
        return true;
    } else {
        return false;
    }
}

//updates score and announces winner
function game (e){
    let choice = this.classList.value;
    //only resets game once player or computer has won with 5 points
    resetGame();
    result = playRound(choice);
    //check playRound return value, updates counters based on win, lose, tie
    if (round(result)){
        playerScore++;
    } else {
        computerScore++;
    }
    resultsDiv.textContent = playerScore + '-' + computerScore + ' ' + determineWinner();
}

btn.forEach(btn => btn.addEventListener('click', game));