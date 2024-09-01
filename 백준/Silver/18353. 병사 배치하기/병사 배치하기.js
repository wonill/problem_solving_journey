const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let soldiers = input[1].split(" ").map(Number);

let dp = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (soldiers[i] < soldiers[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}
console.log(n - Math.max(...dp));