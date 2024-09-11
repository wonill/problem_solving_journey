const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let nums = input.map(Number);

let map = new Map();
nums.forEach((num, i) => map.set(num, i + 1));

console.log(Math.max(...nums));
console.log(map.get(Math.max(...nums)));
