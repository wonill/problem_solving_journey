let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let k = Number(input[0].split(' ')[0]);
let n = Number(input[0].split(' ')[1]);
let cables = input.filter((_, i) => i > 0).map(Number);

let start = 1;
let end = Math.max(...cables);
let result;
while (start <= end){
  let mid = parseInt((start + end)/2);
  let total = 0;
  for (let lan of cables){
    total += Math.floor(lan / mid);
  }
  if (total >= n){
    result = mid;
    start = mid + 1;
  } else end = mid - 1;
}
console.log(result);
