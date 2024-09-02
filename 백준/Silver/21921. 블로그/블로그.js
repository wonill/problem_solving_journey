const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, x] = input[0].split(" ").map(Number);
let visitCounts = input[1].split(" ").map(Number);

let start = 0,
  end = x - 1;
let sum = 0;
let max = 0;
let maxCnt = 0;
for (let j = start; j < end; j++) {
  sum += visitCounts[j];
}
while (end < n) {
  sum += visitCounts[end];
  if (sum > max) {
    max = sum;
    maxCnt = 0;
  }
  if (max != 0 && sum === max) maxCnt++;
  sum -= visitCounts[start];
  start++;
  end++;
}

if (max === 0) maxCnt = "SAD";
if (max) console.log(max);
console.log(maxCnt);