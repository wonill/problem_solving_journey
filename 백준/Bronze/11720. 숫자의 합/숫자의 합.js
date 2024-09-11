const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);

let nums = input[1].split("").map(Number);

console.log(nums.reduce((a, b) => a + b));
