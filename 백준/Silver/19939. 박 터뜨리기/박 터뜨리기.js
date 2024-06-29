let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let n = Number(input[0]);
let k = Number(input[1]);

if (k * (k + 1) / 2  > n) console.log(-1);
else {
  n -= k * (k + 1) / 2;
  console.log(n % k === 0? k - 1 : k);
}