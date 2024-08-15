const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let a = input[0];
let b = input[1];

if (a > b) console.log('>');
else if (a < b) console.log('<');
else if (a === b) console.log('==');