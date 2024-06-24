let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let budget = input[1].split(' ').map(Number);
let limit = Number(input[2]);

let start = 1;
let end = budget.reduce((a, b) => Math.max(a, b));
let max_assign = 0;

let result = 0;
while (start <= end){
  let mid = Math.floor((start + end) / 2);
  let total = 0;
  for (let i = 0; i < budget.length; i++){
    let assign = Math.min(budget[i], mid);
    total += assign;
    if (assign > max_assign) max_assign = assign;
  }
  if (total <= limit){
    start = mid + 1;
    result = max_assign;
  } else end = mid - 1;
  max_assign = 0;
}

console.log(result);