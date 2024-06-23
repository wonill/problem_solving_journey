let fs = require('fs');
let inp = fs.readFileSync('/dev/stdin').toString().split('\n');
let N = Number(inp[0]);
let input = inp[1].split(' ').map(v => Number(v));
let sequence = [...input].sort((a, b) => a - b);
let answer = [];

for (let i = 0; i < input.length; i++){
  for (let j = 0; j < sequence.length; j++){
    if(input[i] === sequence[j]){
      input[i] = j;
      sequence[j] = -1;
      break;
    }
  }
}
console.log(input.join(' '));