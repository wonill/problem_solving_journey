const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, t] = input[0].split(" ").map(Number);
let tasks = [];
for (let i = 1; i < input.length; i++) {
  let task = input[i].split(" ").map(Number);
  tasks.push(task);
}

let dp = Array.from({ length: n + 1 }, () => Array(t + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= t; j++) {
    let time = tasks[i - 1][0];
    let score = tasks[i - 1][1];
    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - time] + score || 0);
  }
}

console.log(dp[n][t]);