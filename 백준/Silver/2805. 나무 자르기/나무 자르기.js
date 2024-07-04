let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);
let woods = input[1].split(' ').map(Number);

let start = 0;
let end = Math.max(...woods);

let result;
while (start <= end){
  let mid = parseInt((start + end) /2);
  let remain = woods.reduce((sum, wood) => sum + (wood - mid > 0 ? wood - mid : 0), 0);
  if (remain >= m) {
    result = mid;
    start = mid + 1;
  }
  else end = mid - 1;
}

console.log(result);