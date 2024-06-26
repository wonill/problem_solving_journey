let input = require('fs').readFileSync('/dev/stdin').toString();

let n = Number(input);

let count = 0;

while (n != 1 && n != 3){
  if (n < 10 && n % 2 === 0) {
    count += n / 2;
    n = 0;
  }
  else {
    n -= 5;
    count++;
  }
  if (n === 0) break;
}

if (n === 0) console.log(count);
else if (n === 1 || n === 3) console.log(-1);