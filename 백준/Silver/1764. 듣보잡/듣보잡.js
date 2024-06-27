let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);

let cannotHear = input.splice(1, n);
let cannotSee = input.splice(1, m);

let set = new Set();
let arr = [];
for (let cannot of cannotHear) set.add(cannot);
for (let cannot of cannotSee) if (set.size === set.add(cannot).size) arr.push(cannot);
arr.sort((a, b) => a.localeCompare(b));
let answer = '';
answer += arr.length + '\n';
for (let a of arr) answer += a + '\n';
console.log(answer);