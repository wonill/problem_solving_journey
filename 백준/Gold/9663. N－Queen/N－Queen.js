let fs = require('fs');
let n = Number(fs.readFileSync('/dev/stdin').toString());

let queens = [];
let count = 0;

function possible(a, b){
  for (let [x, y] of queens){
    if (x === a || y === b) return false;
    if (Math.abs(x - a) === Math.abs(y - b)) return false;
  }
  return true;
}

function dfs(row){
  if (row === n){
    count++;
    return ;
  }
  for (let i = 0; i < n; i++){
    if (!possible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}

dfs(0);
console.log(count);