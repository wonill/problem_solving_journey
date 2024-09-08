const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
let [n, m] = input[0].split(" ").map(Number);
let cost = input.slice(1).map(Number);

let start = 1;
let end = cost.reduce((a, b) => a + b);
let answer = 0;

while (start <= end) {
  let mid = ~~((start + end) / 2);

  let cnt = 0;
  let balance = 0;
  let possible = true;

  for (c of cost) {
    if (c > balance) {
      balance = mid;
      cnt++;
    }
    balance -= c;
    if (balance < 0) {
      possible = false;
      break;
    }
  }

  if (!possible || cnt > m) {
    start = mid + 1;
  } else {
    answer = mid;
    end = mid - 1;
  }
}

console.log(answer);
