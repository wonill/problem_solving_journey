const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const t = Number(input[0]);

let answer = [];
for (let i = 0; i < t; i++) {
  let [n, k] = input[2 * i + 1].split(" ").map(Number);
  let prices = input[2 * i + 2].split(" ").map(Number);

  let dp = Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (prices[i] > prices[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  answer.push(`Case #${i + 1}`);
  answer.push(Number(Math.max(...dp) >= k));
}

console.log(answer.join("\n"));