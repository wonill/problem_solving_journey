const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

let answer = [];
let arr = [];
const command = {
  push: (arr, n) => arr.push(n),
  pop: (arr) => answer.push(arr.pop()),
  size: (arr) => answer.push(arr.length),
  empty: (arr) => answer.push(arr.length ? 0 : 1),
  top: (arr) => answer.push(arr[arr.length - 1] ? arr[arr.length - 1] : -1),
};

let a = Number(input[0]);

for (let i = 1; i <= a; i++) {
  let [cmd, n] = input[i].split(" ");
  command[cmd](arr, n);
}
console.log(answer.map((v) => (v === undefined ? -1 : v)).join("\n"));
