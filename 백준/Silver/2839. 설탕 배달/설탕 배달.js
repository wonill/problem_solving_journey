let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let n = Number(input);

let count = 0;
while (n >= 3){
  if (n % 5 === 0){
    n -= 5;
    count++;
  } else {
    n -= 3;
    count++;
  }
}
if (n === 0) console.log(count);
else console.log(-1);
