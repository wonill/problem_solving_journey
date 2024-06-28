let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let n = Number(input);

let count = 0;
while (n >= 13){
  n -= 5;
  count++;
}
while (n - 3 >= 0){
  if (n % 5 === 0) {
    n -= 5;
    count++;
  }
  else if ((n - 5) % 3 === 0) {
    n -= 5;
    count++;
  }
  else if ((n - 3) % 5 === 0) {
    n -= 3;
    count++;
  }
  else if (n % 3 === 0) {
    n -= 3;
    count++;
  }
  else break;
}
if (n === 0) console.log(count);
else console.log(-1);