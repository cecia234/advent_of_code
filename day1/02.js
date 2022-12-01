const Fs = require('fs');

const input = Fs.readFileSync('./input', 'utf-8');

const inputs = input.split('\n');

let sum = 0;
let max = [0, 0, 0];

for(let i = 0; i<inputs.length; i++) {
    const element = inputs[i];

    if( element === '' || i === inputs.length-1 ) {
        if(sum > max[0]) {
            max[0] = sum;
            max = max.sort();
        }
        sum = 0;
    } else {
        let num = parseInt(element);

        sum +=num;
    }
}

console.log(max.reduce((partialSum, el) => partialSum + el, 0));
