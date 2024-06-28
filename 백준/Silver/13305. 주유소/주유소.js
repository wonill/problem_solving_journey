let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let distances = input[1].split(' ').map(Number);
let prices = input[2].split(' ').map(Number);

let answer = BigInt(0);
let minPrice = prices[0];
for (let i = 0; i < n - 1; i++){
  minPrice = Math.min(minPrice, prices[i]);
  answer += BigInt(minPrice) * BigInt(distances[i]);
}

console.log(answer.toString());