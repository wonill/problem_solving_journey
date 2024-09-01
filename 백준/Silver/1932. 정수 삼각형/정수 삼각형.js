const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

n = Number(input[0]);

let dp = [];
for (let i = 1; i <= n; i++) {
  const nums = input[i].split(" ").map(Number);
  dp.push(nums);
}
for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    let upLeft = 0;
    let up = 0;
    if (j != 0) upLeft = dp[i - 1][j - 1] + dp[i][j];
    if (i != j) up = dp[i - 1][j] + dp[i][j];
    dp[i][j] = Math.max(upLeft, up);
  }
}
console.log(Math.max(...dp[n - 1]));