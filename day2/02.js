/**
 * --- Part Two ---

The Elf finishes helping with the tent and sneaks back over to you. "Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

The total score is still calculated in the same way, but now you need to figure out what shape to choose so the round ends as indicated. The example above now goes like this:

    In the first round, your opponent will choose Rock (A), and you need the round to end in a draw (Y), so you also choose Rock. This gives you a score of 1 + 3 = 4.
    In the second round, your opponent will choose Paper (B), and you choose Rock so you lose (X) with a score of 1 + 0 = 1.
    In the third round, you will defeat your opponent's Scissors with Rock for a score of 1 + 6 = 7.

Now that you're correctly decrypting the ultra top secret strategy guide, you would get a total score of 12.

Following the Elf's instructions for the second column, what would your total score be if everything goes exactly according to your strategy guide?

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

const possibleSuggestions = {
    X: "LOSE", 
    Y: "DRAW", 
    Z: "WIN"  
}


let totalScore = 0;

for(let i=0; i<inputs.length-1; i++) {
    const {opponentPlay, suggestedPlay} = getRoundMoves(inputs[i]);

    totalScore = totalScore + calculateRound(parseInt(opponentPlay), suggestedPlay);
}
console.log(`total score for the tournament:${totalScore}`);


function getRoundMoves(roundInput) {
    const opponentPlay = roundInput.charAt(0);
    const suggestion = roundInput.charAt(2);
    console.log(opponentPlay, suggestion)
    return {opponentPlay: opponentChoices[opponentPlay], suggestedPlay: possibleSuggestions[suggestion]};
}

function calculateRound(opponentPlay, suggestion){
    const myPlay = calculateMyMoveBasedOnSuggestion(opponentPlay, suggestion);

    if(suggestion === "DRAW")
        return myPlay + DRAW_POINTS;
    if(suggestion === "WIN")
        return myPlay + VICTORY_POINTS;
    else
        return myPlay;
}

function calculateMyMoveBasedOnSuggestion(opponent, suggestedPlay){
    if(suggestedPlay === "DRAW") 
        return opponent;
    else if(suggestedPlay === "LOSE") {
        if(opponent === opponentChoices.A)
            return  opponentChoices.C;
        else
            return opponent - 1;
    } else {
        if(opponent === opponentChoices.C)
            return opponentChoices.A;
        else 
            return opponent + 1;
    }
}
