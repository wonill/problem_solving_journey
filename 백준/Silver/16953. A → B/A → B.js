let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let a = Number(input.split(' ')[0]);
let b = Number(input.split(' ')[1]);

let count = 0;
while (b >= 1){
  if (a === b) break;
  if (b % 2 === 0) {
    b /= 2;
    count++;
  } else if (b % 10 === 1){
    b = Math.floor(b / 10);
    count++;
  } else break;
}

if (b === a) console.log(count + 1);
else console.log(-1);
