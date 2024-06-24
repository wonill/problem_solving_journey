let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let scores = input[1].split(' ').map(Number);

let max = Math.max(...scores);
let sum = scores.reduce((a, b) => a + b  / max * 100 ,0);
let average = sum / n;
console.log(average);