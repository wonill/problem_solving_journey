let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let soldiers = input[1].split(' ').map(Number);

function lowerBound(arr, target){
  let start = 0;
  let end = arr.length;
  while (start < end){
    let mid = parseInt((start + end) / 2);
    if (arr[mid] <= target) end = mid;
    else start = mid + 1;
  }
  return start;
}

let result = [];
for (let soldier of soldiers){
  if (!result.length || result[result.length - 1] > soldier) result.push(soldier);
  else result[lowerBound(result, soldier)] = soldier;
}

console.log(soldiers.length - result.length);