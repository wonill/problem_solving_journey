const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let n = Number(input);

let dp = [0, 1];
for (let i = 2; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % (1e9 + 7);
}
console.log(dp[n]);