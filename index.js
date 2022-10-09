const prompt = require("prompt-sync")({ sigint:true })

let playerScore = 0;
let computerScore = 0;
const CHOOSE = "Please choose rock, paper or scissors:";
const WIN = "You won!";
const LOSE = "You lost!";
const DRAW = "Draw!";
const PLAY_AGAIN = "Want to play more? Press (y) for yes, (n) for no:";
const PLAY_MORE = "Let's play one more game :)";
const GOODBYE = "See you next time!";
var Move;
(function (Move) {
    Move["ROCK"] = "ROCK";
    Move["PAPER"] = "PAPER";
    Move["SCISSORS"] = "SCISSORS";
})(Move || (Move = {}));
const computerChoice = (array) => array[Math.floor(Math.random() * 3)];
const playerChoice = () => {
    var _a;
    let playerMove = (_a = prompt(CHOOSE)) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    switch (playerMove) {
        case "rock": return Move.ROCK;
        case "paper": return Move.PAPER;
        case "scissors": return Move.SCISSORS;
        default: return playerChoice();
    }
};
const checkWinner = (computer, player) => {
    if (computer == player) {
        return DRAW;
    }
    if (player == Move.ROCK && computer == Move.SCISSORS ||
        player == Move.PAPER && computer == Move.ROCK ||
        player == Move.SCISSORS && computer == Move.PAPER) {
        playerScore++;
        return WIN;
    }
    computerScore++;
    return LOSE;
};
const anotherGame = () => {
    var _a;
    let answer = (_a = prompt(PLAY_AGAIN)) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    switch (answer) {
        case "y":
            console.log(PLAY_MORE);
            return playGame();
        case "n":
            console.log(GOODBYE);
            return `Your score: ${playerScore}  Computer score: ${computerScore}`;
        default: return anotherGame();
    }
};
const playGame = () => {
    console.log(checkWinner(computerChoice(Object.values(Move)), playerChoice()).concat("\n"));
    return anotherGame();
};
console.log(playGame());
