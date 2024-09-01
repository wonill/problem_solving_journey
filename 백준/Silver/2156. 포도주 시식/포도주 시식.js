const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

n = Number(input[0]);
let grapes = input.slice(1).map(Number);

let dp = Array(n);
dp[0] = grapes[0];
dp[1] = grapes[0] + grapes[1];
dp[2] = Math.max(
  grapes[0] + grapes[1],
  grapes[1] + grapes[2],
  grapes[0] + grapes[2]
);

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(
    grapes[i] + dp[i - 2],
    dp[i - 1],
    dp[i - 3] + grapes[i - 1] + grapes[i]
  );
}
console.log(dp[n - 1]);