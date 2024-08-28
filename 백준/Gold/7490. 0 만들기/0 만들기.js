const fs = require("fs");
let [T, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

const operation = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
};

const union = (nums, opers) => {
  return nums.reduce((a, c, i) => a + (i > 0 ? opers[i - 1] : '') + c, '');
};

const getCalculation = (result) => {
  const expr = result.replace(/ /g, '');
  const numbers = expr.split(/[-+]/).map(Number);
  const operators = expr.split(/\d+/).filter((v) => v !== "");
  return numbers.reduce((a, c, i) => i === 0 ? c : operation[operators[i - 1]](a, c), 0);
};

let answer = [];

input.forEach((n) => {
  let nums = Array.from({ length: n }, (_, i) => i + 1);
  let opers = [];
  let results = [];

  const dfs = (depth) => {
    if (depth === n - 1) {
      const result = union(nums, opers);
      if (getCalculation(result) === 0) {
        results.push(result);
      }
      return;
    }

    for (let x of [' ', '+', '-']) {
      opers.push(x);
      dfs(depth + 1);
      opers.pop();
    }
  };

  dfs(0);
  answer.push(results.join('\n'));
});

console.log(answer.join('\n\n'));