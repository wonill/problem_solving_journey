let fs = require('fs');
let inp = fs.readFileSync('/dev/stdin').toString().split('\n');
let N = Number(inp[0]);
let input = inp[1].split(' ').map(v => Number(v));
let arr = [];

for (let i = 0; i < N; i++){
  let min = 10000;
  for (let j = 0; j < input.length; j++){
    if (input[j] > 0 && (min === 10000 || input[j] < input[min])) min = j;
  }
  input[min] = i-10000;
}
for (let i = 0; i < input.length; i++){
  input[i] += 10000;
}
console.log(input.join(' '));