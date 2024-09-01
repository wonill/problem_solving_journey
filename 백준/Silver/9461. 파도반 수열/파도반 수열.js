const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

t = Number(input[0]);

for (let i = 1; i <= t; i++) {
  let n = Number(input[i]);
  let dp = Array(n);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i < n; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }
  console.log(dp[n - 1]);
}