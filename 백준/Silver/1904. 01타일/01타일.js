const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

n = Number(input);

let dp = Array(n);

dp[0] = 1;
dp[1] = 2;
for (let i = 2; i < n; i++) {
  dp[i] = (dp[i - 1] % 15746) + (dp[i - 2] % 15746);
}

console.log(dp[n - 1] % 15746);