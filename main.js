function computerSelection() {
    let result = Math.floor(Math.random() * 3) + 1;
    switch(result) {
        case 1:
            return result = paper;
        case 2:
            return result = rock;
        case 3:
            return result = scissors;
    }
    return result;
}

// Variables

let playerChoice = prompt('What is your move?', '');
const paper = 'paper';
const rock = 'rock';
const scissors = 'scissors';
let player = playerSelection();
let computer = computerSelection();


function playerSelection(){
if (playerChoice.charAt(0) === 'p' || playerChoice.charAt(0) === 'P') {
    return playerChoice = paper;
} else if (playerChoice.charAt(0) === 'r' || playerChoice.charAt(0) === 'R') {
    return playerChoice = rock;
} else if (playerChoice.charAt(0) === 's' || playerChoice.charAt(0) === 'S') {
    return playerChoice = scissors;
}
}

function singleRound(player, computer) {
    let result;
    if (player === computer){
        return result = "Tie"
    } else if (player === 'paper' && computer === 'rock') {
        return result = 'You Win'
    } else if (player === 'scissors' && computer === 'paper') {
        return result = 'You Win';
    } else if (player === 'rock' && computer === 'scissors') {
        return result = 'You Win'
    } else {
        return result = 'You lose'
    }

}

console.log(playerSelection());
console.log(computer);
console.log(singleRound(player, computer));





