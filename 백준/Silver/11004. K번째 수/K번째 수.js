let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = input[0].split(' ').map(Number)[0];
let k = input[0].split(' ').map(Number)[1];
let arr = input[1].split(' ').map(Number).sort((a, b) => a - b);

console.log(arr[k - 1]);