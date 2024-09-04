const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let dp = input[1].split(" ").map(Number);

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i], dp[i] + dp[i - 1]);
}
console.log(Math.max(...dp));