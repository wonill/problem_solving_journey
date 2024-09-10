const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);

let nums = [];
let answer = [];

const dfs = (x) => {
  if (x === m) {
    answer.push(nums.join(" "));
    return;
  }
  for (let i = 1; i <= n; i++) {
    nums.push(i);
    dfs(x + 1);
    nums.pop();
  }
};

dfs(0);
console.log(answer.join("\n"));
