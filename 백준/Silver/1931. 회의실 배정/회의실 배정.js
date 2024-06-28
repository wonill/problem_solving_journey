let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let times = input.filter((_, i) => i > 0).map(v => v.split(' ').map(Number));
times.sort((a, b) => {
  if (a[1] != b[1]) return a[1] - b[1];
  return a[0] - b[0];
});

let count = 1;
let last = times[0];
for (let i = 1; i < n; i++) {
  if (times[i][0] >= last[1]) {
    last = times[i];
    count++;
  }
}


console.log(count);