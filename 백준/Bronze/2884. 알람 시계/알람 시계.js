const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let [h, m] = input.split(" ").map(Number);

if (m >= 45) console.log(`${h} ${m - 45}`);
else {
  if (h === 0) h = 23;
  else h--;
  console.log(`${h} ${m + 15}`);
}
