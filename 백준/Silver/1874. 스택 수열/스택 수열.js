const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let n = Number(input[0]);

let nums = input.slice(1).map(Number);

let possible = true;
let answer = [];
let now = 1;
let stack = [];
for (let i = 0; i < n; i++) {
  while (now <= nums[i]) {
    stack.push(now++);
    answer.push("+");
  }
  if (stack[stack.length - 1] === nums[i]) {
    stack.pop();
    answer.push("-");
  } else {
    possible = false;
    console.log("NO");
    break;
  }
}
if (possible) console.log(answer.join("\n"));
