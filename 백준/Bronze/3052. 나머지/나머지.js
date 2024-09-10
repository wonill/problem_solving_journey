const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let nums = input.map(Number);

let set = new Set();

nums.forEach((num) => set.add(num % 42));
console.log(set.size);
