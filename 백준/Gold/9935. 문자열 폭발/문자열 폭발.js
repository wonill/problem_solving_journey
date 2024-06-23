let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let remainWord = [];

function canExplodeString(arr, word){
  if (arr.length < word.length) return false;
  if (arr[arr.length - 1] != word[word.length - 1]) return false;
  for (let i = 0; i < word.length; i++){
    if(arr[arr.length - word.length + i] != word[i]) return false;
  }
  return true;
}

function explodeString(arr, length){
  for (let i = 0; i < length; i++) arr.pop();
}

for (let i = 0; i < input[0].length; i++){
  remainWord.push(input[0][i]);
  if (canExplodeString(remainWord, input[1]))
    explodeString(remainWord, input[1].length);
}

console.log(remainWord.length ? remainWord.join('') : 'FRULA');