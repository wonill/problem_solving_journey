let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let budgets = input[1].split(' ').map(Number);
let upper_limit = Number(input[2]);

let start = 0;
let end = Math.max(...budgets);

let result;
while (start <= end){
  let mid = parseInt((start + end) / 2);
  let sum = budgets.reduce((a, b) => a + Math.min(mid, b), 0);
  if (upper_limit >= sum) {
    result = mid;
    start = mid + 1;
  }
  else end = mid - 1;
}

console.log(result);