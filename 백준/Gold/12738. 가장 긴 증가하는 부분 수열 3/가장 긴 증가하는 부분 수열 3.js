const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const lowerBound = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = ~~((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return start;
};

let n = Number(input[0]);
let nums = input[1].split(" ").map(Number);

let lis = [nums[0]];

for (let i = 1; i < n; i++) {
  if (nums[i] > lis[lis.length - 1]) lis.push(nums[i]);
  else lis[lowerBound(lis, nums[i])] = nums[i];
}

console.log(lis.length);