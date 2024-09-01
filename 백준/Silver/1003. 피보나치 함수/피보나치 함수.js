const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = Number(input[0]);
for (let i = 1; i <= t; i++) {
  const n = Number(input[i]);
  let dp = new Array(n);
  dp[0] = 0;
  dp[1] = 1;
  for (let j = 2; j <= n; j++) {
    dp[j] = dp[j - 1] + dp[j - 2];
  }
  if (n === 0) console.log(1, 0);
  else console.log(dp[n - 1], dp[n]);
}