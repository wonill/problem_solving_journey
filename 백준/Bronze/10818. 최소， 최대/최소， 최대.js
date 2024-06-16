const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let minValue = 1000001;
let maxValue = -1000001;

for(let i = 0; i < n; i++){
    if (arr[i] > maxValue) maxValue = arr[i];
    if (arr[i] < minValue) minValue = arr[i];
}

console.log(minValue, maxValue);