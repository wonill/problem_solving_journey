let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let p = input[1].split(' ').map(Number).sort((a, b) => a - b);

let answer = 0;
for (let i = 0; i < n; i++){
  answer += p[i] * (n - i);
}

console.log(answer);