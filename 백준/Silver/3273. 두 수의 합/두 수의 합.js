const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let n = Number(input[0]);
let nums = input[1].split(" ").map(Number);
let x = Number(input[2]);

nums.sort((a, b) => a - b);

let left = 0;
let right = n - 1;

let cnt = 0;
while (left < right) {
  if (nums[left] + nums[right] === x) {
    cnt++;
    left++;
  }

  while (nums[left] + nums[right] > x) right--;
  while (nums[left] + nums[right] < x) left++;
}

console.log(cnt);