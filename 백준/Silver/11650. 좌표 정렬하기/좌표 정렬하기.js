let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = input[0].split(' ').map(Number)[0];

let arr = input.filter((_, i) => i > 0).map(v => v.split(' ').map(Number));

arr.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

let answer = '';
for (let a of arr){
    answer += a[0] + ' ' + a[1] + '\n';
}
console.log(answer);