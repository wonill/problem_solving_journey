const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let n = Number(input);
// 0 0 0 0 0 0 0 0 0 0
// 0 1 1 1 1 1 1 1 1 1
// 1 1 2 2 2 2 2 2 2 1
// 1 3 3 4 4 4 4 4 3 2

let dp = Array.from({ length: n }, () => Array(10).fill(1));
dp[0][0] = 0;
for (let i = 1; i < n; i++) {
  for (let j = 0; j < 10; j++) {
    dp[i][j] = ((dp[i - 1][j - 1] || 0) + (dp[i - 1][j + 1] || 0)) % 1000000000;
  }
}

let result = 0;
for (let i = 0; i < 10; i++) {
  result += dp[n - 1][i];
  result %= Number(1e9);
}
console.log(result);