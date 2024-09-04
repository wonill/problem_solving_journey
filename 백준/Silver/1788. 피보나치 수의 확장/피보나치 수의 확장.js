const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let n = Number(input);
let sign;
if (n < 0 && n % 2 === 0) sign = -1;
else if (n === 0) sign = 0;
else sign = 1;

n = Math.abs(n);
let dp = Array(n + 1);
dp[0] = 0;
dp[1] = 1;
for (let i = 2; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 1e9;
}
console.log(sign);
console.log(dp[n]);