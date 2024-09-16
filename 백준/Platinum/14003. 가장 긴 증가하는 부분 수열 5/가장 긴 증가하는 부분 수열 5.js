const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// const lowerBound = (arr, target) => {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     let mid = ~~((start + end) / 2);
//     if (arr[mid] >= target) end = mid;
//     else start = mid + 1;
//   }
//   return start;
// };

let n = Number(input[0]);
let nums = input[1].split(" ").map(Number);

// let lis = [nums[0]];

// for (let i = 1; i < n; i++) {
//   if (nums[i] > nums[i - 1]) lis.push(nums[i]);
//   else {
//     let index = lowerBound(lis, nums[i]);
//     lis[index] = Math.max(lis[index], nums[i]);
//   }
// }

// console.log(lis.length);
// console.log(lis.join(" "));

let lis = [];
let dp = Array(n).fill(0);

for (let i = 0; i < n; i++) {
  let start = 0;
  let end = lis.length;

  while (start < end) {
    let mid = ~~((start + end) / 2);
    if (lis[mid] < nums[i]) start = mid + 1;
    else end = mid;
  }

  lis[start] = nums[i];

  dp[i] = start + 1;
}

let now = Math.max(...dp);
const maxIdx = dp.indexOf(now);

let answer = [];
for (let i = n - 1; i >= 0; i--) {
  if (dp[i] === now) {
    answer.push(nums[i]);
    now--;
  }
  if (now < 0) break;
}

console.log(answer.length);
console.log(answer.reverse().join(" "));
