const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const T = input.slice(1).map(Number);

T.sort((a, b) => a - b);
let min = BigInt(1);
let max = BigInt(T[0] * M);
let answer = max;

while (min <= max) {
  let cnt = BigInt(0);
  let mid = BigInt((max + min) / 2n);
  T.forEach((time) => {
    cnt += mid / BigInt(time);
  });
  if (cnt >= M) {
    answer = answer < mid ? answer : mid;
    max = mid - 1n;
  } else {
    min = mid + 1n;
  }
}

console.log(String(answer));