let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let soldiers = input[1].split(' ').map(Number);

function lowerBound(arr, target, start, end){
  while (start < end){
    let mid = Math.floor((start + end) /2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}
soldiers.reverse();
let lis = [0];

for (let i = 0; i < n; i++){
  let index = lowerBound(lis, soldiers[i], 0, lis.length);
  if (index === lis.length) lis.push(soldiers[i]);
  else lis[index] = soldiers[i];
}
console.log(n - (lis.length - 1));