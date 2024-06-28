let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let t = Number(input[0]);

for (let i = 0; i < t; i++){
  let testCase = input.splice(1, Number(input[1]) + 1);
  let n = Number(testCase[0]);
  let ranks = testCase.filter((_, i) => i > 0).map(v => v.split(' ').map(Number));
  ranks.sort((a, b) => a[0] - b[0]);
  let minValue = n + 1;
  let count = 0;
  for (let i = 0; i < n; i++){
    if (ranks[i][1] < minValue) {
      minValue = ranks[i][1]; 
      count++;
    }
  }
  console.log(count);
}
