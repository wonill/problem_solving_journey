const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, l] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

let cnt = 0;
let i = 0;
let start = 0;
while (i < n) {
  while (arr[i] - arr[start] < l) i++;
  cnt++;
  start = i;
}
console.log(cnt);
