const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let answer;

if (input === "1 2 3 4 5 6 7 8") answer = "ascending";
else if (input === "8 7 6 5 4 3 2 1") answer = "descending";
else answer = "mixed";

console.log(answer);
