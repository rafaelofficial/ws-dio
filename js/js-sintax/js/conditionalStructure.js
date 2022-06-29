let playerOne = 5;
let playerTwo = 3;
let score;

playerOne != -1 && playerTwo != -1 ? console.log('The players are agree') : console.log("The players don't agree");

if (playerOne > 0 && playerTwo == 0) {
    console.log(`Player 1: ${playerOne} point scored`);
    score = playerOne > playerTwo;
} else if (playerTwo > 0 && playerOne == 0) {
    console.log(`Player 2: ${playerTwo} point scored`);
    score = playerTwo > playerOne;
} else {
    console.log('Nobody point scored');
}

switch (score) {
    case score: playerOne > playerTwo;
        console.log('Winner Player One');
        break;
    case score: playerTwo > playerOne;
        console.log('Winner Player Two');
        break;
    default:
        console.log('Nobody win');
}
