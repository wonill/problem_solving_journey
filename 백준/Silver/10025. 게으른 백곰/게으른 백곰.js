let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let N = input[0].split(' ').map(Number)[0];
let K = input[0].split(' ').map(Number)[1];
let iceArr = input.filter((_, i) => i > 0)
  .map(v => v.split(' ').map(Number)).sort((a, b) => a[1] - b[1]);

let iceMap = new Map();
for (let ice of iceArr){
  iceMap.set(ice[1], ice[0]);
}
let validArea = [];
let sum = [];
let validIndex = 0;
let now = 0;
for (let i = 0; i < iceArr.length; i++){
  validArea.push(iceArr[i]);
  now += iceArr[i][0];
  while (iceArr[i][1] - validArea[validIndex][1] > 2 * K){
    now -= validArea[validIndex][0];
    validIndex++;
  }
  sum.push(now);
}
console.log(Math.max(...sum));