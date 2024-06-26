let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let arr = input.filter((_, i) => i > 0).map(v => v.split(' '));

for (let i = 0; i < arr.length; i++){
    arr[i].push(i);
}

arr.sort((a, b) => Number(a[0]) != Number(b[0]) ? Number(a[0]) - Number(b[0]) 
         : a[2] - b[2]);

let answer = '';

for (let a of arr) answer += a[0] + ' ' + a[1] + '\n';
console.log(answer);
