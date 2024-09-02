const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);

let dp = [];
for (let i = 1; i <= n; i++) {
  let rgb = input[i].split(" ").map(Number);
  dp.push(rgb);
}
for (let i = 1; i < n; i++) {
  for (let j = 0; j < 3; j++) {
    dp[i][j] =
      dp[i][j] + Math.min(dp[i - 1][(j + 1) % 3], dp[i - 1][(j + 2) % 3]);
  }
}
console.log(Math.min(...dp[n - 1]));