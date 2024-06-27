let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let k = Number(input);

let hang = 0;
sum = 0;
while (k > sum){
    hang++;
    sum = 2*(2**hang - 1);
}
let sequence = k - 2*(2**(hang - 1) -1);
let answer = (sequence - 1).toString(2).padStart(hang, '0').replaceAll('0', '4').replaceAll('1', '7');
console.log(answer);