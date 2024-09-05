const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [n, k] = input[0].split(" ").map(Number);
let coins = input.slice(1).map(Number);

let cnt = 0;
for (let i = coins.length - 1; i >= 0; i--) {
  cnt += ~~(k / coins[i]);
  k %= coins[i];
}
console.log(cnt);
