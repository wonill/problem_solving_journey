const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let t = Number(input[0]);
let answer = [];

for (let i = 1; i <= t; i++) {
  let total = 0;
  let score = 1;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") total += score++;
    else score = 1;
  }
  answer.push(total);
}

console.log(answer.join("\n"));
