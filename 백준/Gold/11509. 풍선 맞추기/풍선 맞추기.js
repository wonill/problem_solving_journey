let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let balloons = input[1].split(' ').map(Number);

let map = new Map();
let count = 0;
for (let balloon of balloons){
  map.has(balloon) ? map.set(balloon, map.get(balloon) + 1) : map.set(balloon, 1); 
  if (map.has(balloon + 1)) {
    map.set(balloon + 1, map.get(balloon + 1) - 1);
    if (map.get(balloon + 1) === 0) map.delete(balloon + 1);
  } else count++;
}

console.log(count);