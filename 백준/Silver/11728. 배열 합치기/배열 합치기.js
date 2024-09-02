const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr1 = input[1].split(" ").map(Number);
let arr2 = input[2].split(" ").map(Number);

let answer = [];
let left = 0;
let right = 0;
while (left < n && right < m) {
  if (arr1[left] <= arr2[right]) answer.push(arr1[left++]);
  else answer.push(arr2[right++]);
}
while (left < n) {
  answer.push(arr1[left++]);
}

while (right < m) {
  answer.push(arr2[right++]);
}

console.log(answer.join(" "));