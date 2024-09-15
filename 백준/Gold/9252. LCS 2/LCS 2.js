const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let a = input[0].trim();
let b = input[1].trim();
let n = a.length;
let m = b.length;

// let a = input[1].split(" ").map(Number);
// let b = input[3].split(" ").map(Number);
// let n = Number(input[0]);
// let m = Number(input[2]);
let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
    else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
  }
}

// console.log(dp);

let sequence = [];
let i = n,
  j = m;

while (i > 0 && j > 0) {
  if (a[i - 1] === b[j - 1]) {
    sequence.push(a[i - 1]);
    i--;
    j--;
  } else if (dp[i - 1][j] > dp[i][j - 1]) {
    i--;
  } else {
    j--;
  }
}

sequence.reverse(); // 역순으로 추가되므로 뒤집기
console.log(sequence.length);
if (sequence.length) console.log(sequence.join(""));