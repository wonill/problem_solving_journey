const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let m = Number(input[2]);

let intervals = [];
for (let i = 3; i < m + 3; i++) {
  let interval = input[i].split(" ").map(Number);
  intervals.push(interval);
}

let prefixSum = [0];

let sum = 0;
for (let i of arr) {
  sum += i;
  prefixSum.push(sum);
}

let output = [];
for (let interval of intervals) {
  let sumOfInterval = prefixSum[interval[1]] - prefixSum[interval[0] - 1];
  output.push(sumOfInterval);
}

console.log(output.join("\n"));
