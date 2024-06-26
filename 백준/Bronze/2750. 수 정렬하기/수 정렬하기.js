let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);

let arr = input.filter((_, i) => i > 0).map(Number);

arr.sort((a, b) => a - b);

for (let a of arr) console.log(a);

