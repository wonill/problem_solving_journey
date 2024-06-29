let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);

function isSame(word, start, end){
  while (start < end){
    if (word[start] != word[end]) return false;
    start++;
    end--;
  }
  return true;
}

for (let i = 1; i <= n; i++){
  let answer = 0;
  let start = 0;
  let end = input[i].length - 1;
  let chance = 1;
  while (start < end){
    if (input[i][start] != input[i][end]){
      if (isSame(input[i], start + 1, end) || isSame(input[i], start, end - 1)) {
        answer = 1;
        break;
      }
      else {
        answer = 2;
        break;
      }
    }
    start++;
    end--;
  }
  console.log(answer);
}