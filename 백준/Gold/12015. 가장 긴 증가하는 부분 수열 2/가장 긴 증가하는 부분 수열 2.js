const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let nums = input[1].split(" ").map(Number);

let lis = [];
let dp = Array(n).fill(0);

for (let i = 0; i < n; i++) {
  let start = 0;
  let end = lis.length;

  while (start < end) {
    let mid = ~~((start + end) / 2);

    if (lis[mid] < nums[i]) start = mid + 1;
    else end = mid;
  }

  lis[start] = nums[i];

  dp[i] = start + 1;
}

console.log(lis.length);