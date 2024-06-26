let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let arr = input.map(Number).sort((a, b) => b - a).join('');

console.log(arr);


