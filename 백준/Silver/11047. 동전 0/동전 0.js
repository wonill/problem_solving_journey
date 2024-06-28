let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);
let coins = input.filter((_, i) => i > 0).map(Number).sort((a, b) => b - a);

let count = 0;
for (let coin of coins){
  while (k - coin >= 0){
    k -= coin;
    count++;
  }
  if (k === 0) break;
}

console.log(count);