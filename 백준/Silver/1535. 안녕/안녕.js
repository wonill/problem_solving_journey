const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let cost = input[1].split(" ").map(Number);
let happy = input[2].split(" ").map(Number);

let max = 0;
const solution = (idx, health, points, isFirst) => {
  if (health <= 0) return;
  if (idx >= n) {
    if (points > max) max = points;
    return;
  }

  solution(idx + 1, health, points);
  solution(idx + 1, health - cost[idx], points + happy[idx]);
};

solution(0, 100, 0);
console.log(max);
