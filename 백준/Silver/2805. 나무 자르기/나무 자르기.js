let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);
let woods = input[1].split(' ').map(Number).sort((a, b) => a - b);
let start = 0;
let end = woods[n - 1];

let result;
while (start <= end){
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let wood of woods){
    total += (wood - Math.min(wood, mid));
  }
  if (total >= m) {
    result = mid;
    start = mid + 1;
  }
  else end = mid - 1;
}

console.log(result);