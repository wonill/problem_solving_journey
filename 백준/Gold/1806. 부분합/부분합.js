let fs = require('fs');
let inp = fs.readFileSync('/dev/stdin').toString().split('\n');
let N = Number(inp[0].split(' ')[0]);
let S = Number(inp[0].split(' ')[1]);
let input = inp[1].split(' ').map(v => Number(v));
let answer = [];
let stack = [];
let sum = 0;

for (let i = 0; i < N; i++){
  if (sum < S){
    sum += input[i];
    stack.push(input[i]);
  }
  while (sum >= S){
    answer.push(stack.length);
    sum -= stack[0];
    stack.shift();
  }
}

console.log(answer.length ? Math.min(...answer) : 0);