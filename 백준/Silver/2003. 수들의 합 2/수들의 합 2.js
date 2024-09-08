const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let cnt = 0;

let start = 0;
let sum = 0;
for (let i = 0; i < n; i++) {
  sum += arr[i];

  while (sum > m) {
    sum -= arr[start];
    start++;
  }

  if (sum === m) cnt++;
}

console.log(cnt);