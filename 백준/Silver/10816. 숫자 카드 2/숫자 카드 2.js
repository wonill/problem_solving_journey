let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let number_cards = input[1].split(' ').map(Number);
let m = Number(input[2]);
let problems = input[3].split(' ').map(Number);

let map = new Map();
for (let problem of problems){
  map.set(problem, 0);
}
for (let number_card of number_cards){
  if(map.has(number_card)) map.set(number_card, map.get(number_card) + 1);
}
for (let i = 0; i < problems.length; i++){
  problems[i] = map.get(problems[i]);
}
console.log(problems.join(' '));