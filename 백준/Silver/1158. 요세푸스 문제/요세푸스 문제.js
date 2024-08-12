let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

const solution = (N, K) => {
  let answer = "<";
  let arr = Array.from({ length: N }, (_, i) => i + 1);
  let indexToDelete = 0;
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    temp = K - 1;
    while (temp > 0) {
      indexToDelete = (indexToDelete + 1) % arr.length;
      if (arr[indexToDelete] != 0) temp--;
    }
    answer += arr[indexToDelete] + ", ";
    arr[indexToDelete] = 0;
    while (arr[indexToDelete] === 0)
      indexToDelete = (indexToDelete + 1) % arr.length;
  }
  answer += arr.find((v) => v != 0) + ">";
  return answer;
};

console.log(solution(a, b));