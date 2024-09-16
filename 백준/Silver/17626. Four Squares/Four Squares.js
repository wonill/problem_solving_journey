const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let n = Number(input);

let dp = Array(n + 1).fill(0);

for (let k = 1; k ** 2 <= n; k++) dp[k ** 2] = 1;

for (let i = 1; i <= n; i++) {
  if (dp[i] != 0) continue;

  for (let j = 1; j * j <= i; j++) {
    if (dp[i] === 0) dp[i] = dp[j * j] + dp[i - j * j];
    else dp[i] = Math.min(dp[i], dp[j * j] + dp[i - j * j]);
  }
}
console.log(dp[n]);
