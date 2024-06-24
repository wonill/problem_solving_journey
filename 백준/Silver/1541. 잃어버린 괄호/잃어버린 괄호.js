let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let splitByMinus = input.split('-')
let numbers = splitByMinus.map(v => v.split('+').map(Number));
let answer = 0;
for (let i = 0; i < numbers.length; i++){
  let value = numbers[i].reduce((a, b) => a + b);
  answer += i === 0 ? value : -value;
}
console.log(answer);