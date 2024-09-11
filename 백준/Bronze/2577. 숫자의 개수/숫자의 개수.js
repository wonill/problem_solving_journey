const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [a, b, c] = input.map(Number);

let result = String(a * b * c);

let answer = [];
for (let i = 0; i < 10; i++) {
  let cnt = 0;
  for (let j = 0; j < result.length; j++) {
    if (result[j] == i) cnt++;
  }
  answer.push(cnt);
}

console.log(answer.join("\n"));
