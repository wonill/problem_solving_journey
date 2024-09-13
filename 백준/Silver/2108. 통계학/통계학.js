const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let n = Number(input[0]);

let nums = input.slice(1).map(Number);
nums.sort((a, b) => a - b);

let map = new Map();
nums.forEach((num) => map.set(num, (map.get(num) || 0) + 1));
let counts = Array.from(map).sort((a, b) => b[1] - a[1]);
const max = counts[0][1];
let maxArr = counts.filter(([num, count]) => count === max);

let answer = [];

answer.push(Math.round(nums.reduce((a, b) => a + b) / nums.length));
answer.push(nums[~~(nums.length / 2)]);
answer.push(maxArr.length > 1 ? maxArr[1][0] : maxArr[0][0]);
answer.push(nums[nums.length - 1] - nums[0]);
console.log(answer.join("\n"));
