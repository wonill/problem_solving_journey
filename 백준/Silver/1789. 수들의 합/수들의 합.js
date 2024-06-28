let input = require('fs').readFileSync('/dev/stdin').toString();

let n = Number(input);

let i = 1;
while (true){
  if (i * (i + 1) / 2 > n) break;
  i++;
}
console.log(i - 1);