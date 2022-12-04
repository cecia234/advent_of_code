/** 
 * --- Part Two ---

It seems like there is still quite a bit of duplicate work planned. Instead, the Elves would like to know the number of pairs that overlap at all.

In the above example, the first two pairs (2-4,6-8 and 2-3,4-5) don't overlap, while the remaining four pairs (5-7,7-9, 2-8,3-7, 6-6,4-6, and 2-6,4-8) do overlap:

    5-7,7-9 overlaps in a single section, 7.
    2-8,3-7 overlaps all of the sections 3 through 7.
    6-6,4-6 overlaps in a single section, 6.
    2-6,4-8 overlaps in sections 4, 5, and 6.

So, in this example, the number of overlapping assignment pairs is 4.

In how many assignment pairs do the ranges overlap?

*/


const Fs = require('fs');

const input = Fs.readFileSync('./input', 'utf-8');

const inputs = input.split('\n');

let count = 0;

// last row of input is empty
for(let i=0; i<inputs.length -1; i++) {
    const input = inputs[i];
    
    const intervals = getInterval(input);

    if(isOneIntervalContainedInTheOther(intervals))
        count++;
}

console.log("Total overlapping intervals: " + count);

function getInterval(input) {
    const regex = new RegExp(/^([0-9]+)-([0-9]+),([0-9]+)-([0-9]+)$/)

    const matches = input.match(regex);

    const intervals = {
        elf1: {
            start: parseInt(matches[1]),
            end: parseInt(matches[2])
        },
        elf2: {
            start: parseInt(matches[3]),
            end: parseInt(matches[4])
        }
    }

    return intervals
}

function isOneIntervalContainedInTheOther(intervals) {
    if( (intervals.elf1.end >= intervals.elf2.start && intervals.elf1.start <= intervals.elf2.start) || 
        (intervals.elf2.end >= intervals.elf1.start && intervals.elf2.start <= intervals.elf1.start) ){
            return true;
    }
    return false
}