const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

function solution(nums) {
  const upper_bound = (target) => {
    let start = 0;
    let end = answer.length - 1;
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (answer[mid] < target) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    return end;
  };

  let answer = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (answer[answer.length - 1] < nums[i]) {
      answer.push(nums[i]);
    } else if (answer[answer.length - 1] > nums[i]) {
      answer[upper_bound(nums[i])] = nums[i];
    }
  }
  return answer.length;
}

console.log(solution(arr));
