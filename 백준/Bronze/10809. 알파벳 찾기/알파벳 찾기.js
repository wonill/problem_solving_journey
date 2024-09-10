const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let answer = [];
let alphabets = "abcdefghijklmnopqrstuvwxyz";
for (let alphabet of alphabets) {
  answer.push(input.indexOf(alphabet));
}

console.log(answer.join(" "));
