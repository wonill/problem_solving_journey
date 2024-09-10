const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);

let nums = [];
let answer = [];

const dfs = (x) => {
  if (x === n) {
    answer.push(nums.join(" "));
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (!nums.includes(i)) {
      nums.push(i);
      dfs(x + 1);
      nums.pop();
    }
  }
};

dfs(0);
console.log(answer.join("\n"));
