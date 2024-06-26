let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let words = [...new Set(input.filter((_, i) => i > 0))];

words.sort((a, b) => a.length != b.length ? a.length - b.length : a.localeCompare(b));

let answer = '';
for (let word of words) answer += word + '\n';
console.log(answer);