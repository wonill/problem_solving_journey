const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let arr = input.slice(1).map(Number);
arr.sort((a, b) => a - b);
for (let i = 0; i < arr.length; i++) {
  arr[i] -= i + 1;
}
console.log(arr.reduce((a, c) => a + Math.abs(c), 0));