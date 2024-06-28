let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let distances = input[1].split(' ').map(Number);
let prices = input[2].split(' ').map(Number);

let answer = 0;
let minPrice = 0;
for (let i = 0; i < n - 1; i++){
  if (minPrice === 0 || prices[i] < minPrice) minPrice = prices[i];
  answer += minPrice * distances[i];
}

console.log(answer);