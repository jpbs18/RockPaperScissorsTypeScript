"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Variables_1 = require("./Utilities/Variables");
const Enum_1 = require("./Utilities/Enum");
const prompt = require("prompt-sync")({ sigint:true })
let playerScore = 0;
let computerScore = 0;
const computerChoice = (array) => array[Math.floor(Math.random() * 3)];
const playerChoice = () => {
    var _a;
    let playerMove = (_a = prompt(Variables_1.CHOOSE)) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    switch (playerMove) {
        case "rock": return Enum_1.Move.ROCK;
        case "paper": return Enum_1.Move.PAPER;
        case "scissors": return Enum_1.Move.SCISSORS;
        default: return playerChoice();
    }
};
const checkWinner = (computer, player) => {
    if (computer == player) {
        return Variables_1.DRAW;
    }
    if (player == Enum_1.Move.ROCK && computer == Enum_1.Move.SCISSORS ||
        player == Enum_1.Move.PAPER && computer == Enum_1.Move.ROCK ||
        player == Enum_1.Move.SCISSORS && computer == Enum_1.Move.PAPER) {
        playerScore++;
        return Variables_1.WIN;
    }
    computerScore++;
    return Variables_1.LOSE;
};
const anotherGame = () => {
    var _a;
    let answer = (_a = prompt(Variables_1.PLAY_AGAIN)) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    switch (answer) {
        case "y":
            console.log(Variables_1.PLAY_MORE);
            return playGame();
        case "n":
            console.log(Variables_1.GOODBYE);
            return `Your score: ${playerScore}  Computer score: ${computerScore}`;
        default: return anotherGame();
    }
};
const playGame = () => {
    console.log(checkWinner(computerChoice(Object.values(Enum_1.Move)), playerChoice()).concat("\n"));
    return anotherGame();
};
console.log(playGame());
