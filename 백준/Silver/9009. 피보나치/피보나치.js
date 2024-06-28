let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);

let numbers = input.filter((_, i) => i > 0).map(Number);

function fibonacci(n){
  let dp = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++){
    if (i <= 2) dp[i] = 1;
    else dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

for (let number of numbers){
  let j = 0;
  let answer = [];
  while (fibonacci(j) <= number) j++;
  j--;

  while (number > 0){
    let f = fibonacci(j--);
    if (f <= number){
      number -= f;
      answer.push(f);
    }
    if (number === 0) break;
  }
  console.log(answer.sort((a, b) => a - b).join(' '));
}