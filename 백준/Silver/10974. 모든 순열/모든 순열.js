const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let n = Number(input);

let nums = [];
const dfs = (x) => {
  if (x > n) {
    console.log(nums.join(" "));
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (nums.includes(i)) continue;
    nums.push(i);
    dfs(x + 1);
    nums.pop();
  }
};

dfs(1);