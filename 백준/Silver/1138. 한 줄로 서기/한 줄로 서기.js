let fs = require('fs');
let inp = fs.readFileSync('/dev/stdin').toString().split('\n');
let N = Number(inp[0]);
let input = inp[1].split(' ').map(v => Number(v));

let answer = Array.from({length : N}, () => 0);
let count;
for (let i = 0; i < N; i++){
  count = input[i]
  for (let j = 0; j < N; j++){
    if(answer[j] === 0 && count === 0){
      answer[j] = i + 1;
      break;
    } else if (answer[j] === 0) count--;
  }
}
console.log(answer.join(' '));