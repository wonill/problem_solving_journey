const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let a = input[1].split(" ").map(Number);
let b = input[3].split(" ").map(Number);
let n = Number(input[0]);
let m = Number(input[2]);

a = a.map((v, i) => [i, v]).sort((a, b) => b[1] - a[1] || a[0] - b[0]);
// b = b.map((v, i) => [i, v]).sort((a, b) => b[1] - a[1] || a[0] - b[0]);
let answer = [];
let maxIndex = -1;
let target;
for (let i = 0; i < a.length; i++) {
  if (a[i][0] < maxIndex) continue;
  target = a[i][1];
  let targetIndex = b.indexOf(target);
  if (targetIndex === -1) continue;
  maxIndex = a[i][0];
  answer.push(target);
  b.splice(0, targetIndex + 1);
  // console.log(b);
}

// let result = [];
// result.push(answer.length);
// if (answer.length) result.push(answer.join(" "));
// console.log(result.join("\n"));

console.log(answer.length);
if (answer.length) console.log(answer.join(" "));
