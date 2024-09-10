const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [a, b, c] = input.map(Number);
console.log(a + b - c);

// 문자열 연산
let A = input[0].trim();
let B = input[1].trim();
console.log(A + B - Number(input[2]));