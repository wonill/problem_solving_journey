const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

let set = new Set();

let cnt = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length - i; j++) {
    set.add(input.slice(j, j + i + 1));
  }
}

console.log(set.size);