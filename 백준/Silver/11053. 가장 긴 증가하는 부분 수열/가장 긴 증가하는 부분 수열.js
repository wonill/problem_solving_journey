const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// function lowerBound(arr, target, start, end) {
//   while (start < end) {
//     let mid = parseInt((start + end) / 2);
//     if (arr[mid] >= target) end = mid;
//     else start = mid + 1;
//   }
//   return end;
// }

// function solution(nums) {
//   let answer = [nums[0]];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < nums[nums.length - 1]) {
//       answer[lowerBound(answer, nums[i], 0, answer.length - 1)] = nums[i];
//     } else answer.push(nums[i]);
//   }
//   return answer.length;
// }
function solution(nums) {
  let dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  return Math.max(...dp);
}

console.log(solution(arr));