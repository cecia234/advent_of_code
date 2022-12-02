/**
 * Appreciative of your help yesterday, one Elf gives you an encrypted strategy guide (your puzzle input) that they say will be sure to help you win. "The first column is what your opponent is going to play: A for Rock, B for Paper, and C for Scissors. The second column--" Suddenly, the Elf is called away to help with someone's tent.

The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.

The winner of the whole tournament is the player with the highest score. Your total score is the sum of your scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would get if you were to follow the strategy guide.

For example, suppose you were given the following strategy guide:

A Y
B X
C Z

This strategy guide predicts and recommends the following:

    In the first round, your opponent will choose Rock (A), and you should choose Paper (Y). This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).
    In the second round, your opponent will choose Paper (B), and you should choose Rock (X). This ends in a loss for you with a score of 1 (1 + 0).
    The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.

In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).

What would your total score be if everything goes exactly according to your strategy guide?


 */

const Fs = require('fs');

const input = Fs.readFileSync('./input', 'utf-8');

const inputs = input.split('\n');
const VICTORY_POINTS = 6;
const DRAW_POINTS = 3;

const opponentChoices = {
    A: 1, //rock
    B: 2, //paper
    C: 3 //scissor
}

const myChoices = {
    X: 1, //rock
    Y: 2, //paper
    Z: 3 //scissor
}


let totalScore = 0;

for(let i=0; i<inputs.length-1; i++) {
    const {opponentPlay, myPlay} = getRoundMoves(inputs[i]);

    totalScore = totalScore + calculateRound(parseInt(opponentPlay), parseInt(myPlay));
}

console.log(`total score for the tournament:${totalScore}`);


function getRoundMoves(roundInput) {
    const opponentPlay = roundInput.charAt(0);
    const myPlay = roundInput.charAt(2);

    return {opponentPlay: opponentChoices[opponentPlay], myPlay: myChoices[myPlay]};
}

function calculateRound(opponentPlay, myPlay){
    if(myPlay === opponentPlay)
        return myPlay + DRAW_POINTS;
    if(myPlay-opponentPlay === 1)
        return myPlay + VICTORY_POINTS;
    if(myPlay-opponentPlay === -2)
        return myPlay + VICTORY_POINTS;
    else
        return myPlay;
}
