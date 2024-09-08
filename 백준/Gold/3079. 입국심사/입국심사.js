const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map(Number);
const times = input.slice(1).map(Number);

times.sort((a, b) => a - b);
let min = BigInt(1);
let max = BigInt(times[0] * m);

let answer = max;
while (min <= max) {
  let mid = BigInt((max + min) / 2n);

  let sum = BigInt(0);
  for (let time of times) {
    sum += mid / BigInt(time);
  }
  if (sum >= m) {
    answer = mid;
    max = mid - 1n;
  } else {
    min = mid + 1n;
  }
}

console.log(String(answer));