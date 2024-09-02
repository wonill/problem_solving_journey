const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function lowerBound(arr, target) {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function solution(nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (!answer.length || answer[answer.length - 1] < nums[i])
      answer.push(nums[i]);
    else answer[lowerBound(answer, nums[i])] = nums[i];
  }
  return answer.length;
}

console.log(solution(arr));