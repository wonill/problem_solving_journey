const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let n = Number(input);

let dp = Array(n + 1);

dp[0] = 0;
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= n; i++) {
  let a = i % 2 === 0 ? i / 2 : i - 1;
  let b = i % 3 === 0 ? i / 3 : i - 1;
  dp[i] = Math.min(dp[i - 1], dp[a], dp[b]) + 1;
}

console.log(dp[n]);