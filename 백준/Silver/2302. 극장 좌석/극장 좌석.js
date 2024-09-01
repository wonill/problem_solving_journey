const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let m = Number(input[1]);
let vips = input.slice(2).map(Number);
vips.push(n + 1);

let vipIdx = 0;
let groupCnt = 0;
let groups = [];
for (let i = 1; i <= n + 1; i++) {
  if (i === vips[vipIdx]) {
    if (groupCnt > 0) groups.push(groupCnt);
    groupCnt = 0;
    vipIdx++;
  } else groupCnt++;
}

let dp = Array(41);
dp[0] = 1;
dp[1] = 1;
for (let i = 2; i <= 40; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

let answer = 1;
for (let i = 0; i < groups.length; i++) {
  answer *= dp[groups[i]];
}

console.log(answer);
// (40 + 25 + 15) % 7 = ((40 % 7 + 25) % 7 + 15) % 7
