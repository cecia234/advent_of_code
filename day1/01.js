const Fs = require('fs');

const input = Fs.readFileSync('./input', 'utf-8');

const inputs = input.split('\n');

let max = 0;
let sum = 0;

for(let i = 0; i<inputs.length; i++) {
    const element = inputs[i];

    if( i === inputs.length-1 || element === '' ) {
        max = sum > max ? sum : max;
        sum = 0;
    } else {

        let num = parseInt(element);

        sum +=num;

    }
}

console.log(max)