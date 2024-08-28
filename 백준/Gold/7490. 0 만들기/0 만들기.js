const fs = require("fs");
let [T, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = [];

const operation = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
};

const union = (nums, opers) => {
  return nums.reduce((a, c, i) => a + opers[i - 1] + c);
};

const getCalculation = (result) => {
  const numbers = result.split(/[-+]/).map(Number);
  const operators = result.split(/\d+/).filter((v) => v != "");
  if (!operators.length) return numbers[0];
  return numbers.reduce((a, c, i) => operation[operators[i - 1]](a, c));
};

input.forEach((n) => {
  let nums = Array.from({ length: n }, (_, i) => i + 1);
  let opers = [];

  const dfs = (depth) => {
    if (depth === n) {
      const result = union(nums, opers);
      if (getCalculation(result.split(" ").join("")) === 0) {
        answer.push(result);
      }
      return;
    }

    for (let x of [" ", "+", "-"]) {
      opers.push(x);
      dfs(depth + 1);
      opers.pop();
    }
  };

  dfs(1);
  answer.push("");
});
console.log(answer.join("\n").trim());
