const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);
let visited = Array(n + 1).fill(false);
let nums = [];

const dfs = (len, x) => {
  if (len === m) {
    console.log(
      visited
        .map((v, i) => (v === true ? i : 0))
        .filter((k) => k != 0)
        .join(" ")
    );
    return;
  }

  for (let i = x; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(len + 1, i + 1);
      visited[i] = false;
    }
  }
};

dfs(0, 1);
