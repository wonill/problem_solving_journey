const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let [n, m] = input.split(" ").map(Number);

let nums = [];

const contains = (nums, value) => {
  return nums.some((num) => num === value);
};

const dfs = (x) => {
  if (nums.length === m) {
    console.log(nums.join(" "));
    return;
  }

  for (let i = x; i <= n; i++) {
    if (!contains(nums, i)) {
      nums.push(i);
      dfs(x);
      nums.pop();
    }
  }
};

dfs(1);