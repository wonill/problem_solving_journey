let fs = require('fs');
let inp = fs.readFileSync('/dev/stdin').toString().split('\n');
let N = Number(inp[0].split(' ')[0]);
let K = Number(inp[0].split(' ')[1]);
let B = Number(inp[0].split(' ')[2]);
let input = inp.slice(1).map(v => Number(v)).sort((a, b) => a - b);
let arr = Array.from({length : N}, () => 0);
for (let i = 0; i < input.length; i++){
  arr[input[i] - 1] = input[i];
}

let num_of_repair = [];

let repair;
for (let i = 0; i < N - K + 1; i++){
  repair = 0;
  for (let j = i; j < i + K; j++){
    if(arr[j] != 0) repair++;
  }
  num_of_repair.push(repair);
}

console.log(Math.min(...num_of_repair));