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
if (playerSelection.charAt(0) == p || playerSelection.charAt(0) == P) {
    
}

