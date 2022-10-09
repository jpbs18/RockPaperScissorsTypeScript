let playerScore: number = 0;
let computerScore: number = 0;
const CHOOSE: string = "Please choose rock, paper or scissors:";
const WIN: string = "You won!";
const LOSE : string = "You lost!";
const DRAW: string = "Draw!";
const PLAY_AGAIN: string = "Want to play more? Press (y) for yes, (n) for no:"
const PLAY_MORE: string = "Let's play one more game :)";
const GOODBYE: string = "See you next time!";

enum Move{
    ROCK = "ROCK",
    PAPER = "PAPER",
    SCISSORS = "SCISSORS"
}

const computerChoice = (array: Move[]): Move => array[Math.floor(Math.random() * 3)]


const playerChoice = ():Move => {

    let playerMove: string | undefined = prompt(CHOOSE)?.toLowerCase();

    switch(playerMove){
        case "rock": return Move.ROCK;
        case "paper": return Move.PAPER;
        case "scissors": return Move.SCISSORS;
        default: return playerChoice();
    }
}

const checkWinner = (computer: Move, player: Move): string => {

    if(computer == player) {
        return DRAW;
    }
    if(player == Move.ROCK && computer == Move.SCISSORS ||
        player == Move.PAPER && computer == Move.ROCK ||
        player == Move.SCISSORS && computer == Move.PAPER){
            playerScore++;
            return WIN;
        }
    
        computerScore++;
        return LOSE;
}

const anotherGame = ():string => {

    let answer: string | undefined = prompt(PLAY_AGAIN)?.toLowerCase();

    switch(answer){
        case "y": 
            console.log(PLAY_MORE);
            return playGame();
        case "n":
            console.log(GOODBYE);
            return  `Your score: ${playerScore}  Computer score: ${computerScore}`;
        default: return anotherGame();       
    }
}

const playGame = (): string => {
    console.log(checkWinner(computerChoice(Object.values(Move)), playerChoice()).concat("\n"));
    return anotherGame();
}    
console.log(playGame())
