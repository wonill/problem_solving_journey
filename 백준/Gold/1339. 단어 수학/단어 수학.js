const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].trim());
}

let map = new Map();
for (let i = 0; i < n; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    map.set(
      arr[i][j],
      (map.get(arr[i][j]) || 0) + 10 ** (arr[i].length - j - 1)
    );
  }
}

let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
let num = 9;
for (let i = 0; i < sorted.length; i++) {
  map.set(sorted[i][0], num--);
}
let nums = arr.map((v) =>
  Number(
    v
      .split("")
      .map((val) => map.get(val))
      .join("")
  )
);
console.log(nums.reduce((a, b) => a + b));

//반례
// 4
// ABC
// BBD
// DGE
// PPP
// B:9  P:8  D:7  A:6  G:5  C:4  E:3
