const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let n = Number(input);

let answer = [];
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) row += " ";
  while (row.length < n) row += "*";
  answer.push(row);
}

console.log(answer.join("\n"));
