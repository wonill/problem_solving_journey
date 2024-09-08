const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let [n, m] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);

let start = 0;
let cnt = 0;
let removed = 0;

let max = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) cnt++;
  else removed++;

  if (cnt > max) max = cnt;

  while (removed >= m && nums[i + 1] % 2 === 1) {
    if (nums[start] % 2 === 0) cnt--;
    else removed--;
    start++;
  }
}

console.log(max);