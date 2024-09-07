const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let arr = input.slice(1).map(BigInt);

arr.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

let map = new Map();
for (let i = 0; i < arr.length; i++) {
  map.set(arr[i], (map.get(arr[i]) || 0n) + 1n);
}

let max = 0n;

for (let v of map.values()) {
  if (v > max) max = v;
}

let answer;
for (let [key, value] of map) {
  if (value === max) {
    answer = key;
    break;
  }
}
console.log(answer.toString());