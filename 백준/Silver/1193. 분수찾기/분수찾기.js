let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let n = Number(input);

function getArithmeticSum(a, d, n) {
  if (n <= 0) return 0;
  return (n * (2 * a + (n - 1) * d)) / 2; //항의 개수 n 초항 a 차수 d
}

let left = 1;
while (1) {
  let sum = getArithmeticSum(1, 4, left);
  if (sum >= n) {
    break;
  }
  left++;
}

let right = 1;
while (1) {
  let sum = getArithmeticSum(3, 4, right);
  if (sum >= n) {
    break;
  }
  right++;
}

let leftIndex = n - getArithmeticSum(1, 4, left - 1);
let rightIndex = n - getArithmeticSum(3, 4, right - 1);

let leftMax = (left - 1) * 2;
let rightMax = right * 2 - 1;

let leftArr = [];
for (let i = 0; i <= leftMax; i++) leftArr.push(i);
let tmp = [...leftArr];
tmp.pop();
tmp.reverse();
leftArr = leftArr.concat(tmp);

let leftValue = leftArr[leftIndex - 1] + 1;


let rightArr = [];
for (let i = 0; i <= rightMax; i++) rightArr.push(i);
let tmp2 = [...rightArr];
tmp2.pop();
tmp2.reverse();
rightArr = rightArr.concat(tmp2);

let rightValue = rightArr[rightIndex - 1] + 1;

console.log(`${leftValue}/${rightValue}`);