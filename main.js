function getComputerChoices() {
    const paper = 1;
    const rock = 2;
    const scissors = 3;
    let result = Math.floor(Math.random() * 3) + 1;
    switch(result) {
        case 1:
            return 'Paper';
        case 2:
            return 'Rock';
        case 3:
            return 'Scissors';
    }
}

// 

let playerSelection = prompt('What is your move?', '');
const paper = 1;
const rock = 2;
const scissors = 3;
if (playerSelection.charAt(0) == 'p' || playerSelection.charAt(0) == 'P') {
    playerSelection = paper;
} else if (playerSelection.charAt(0) == 'r' || playerSelection.charAt(0) == 'R') {
    playerSelection = rock;
} else if (playerSelection.charAt(0) == 's' || playerSelection.charAt(0) == 'S') {
    playerSelection = scissors;
}

console.log(playerSelection);

