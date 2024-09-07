const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n,k] = input[0].split(' ').map(Number);
let ting = [{
  v:0,
  w:0,
}];
let dp = new Array(n+1).fill(null).map(_=>new Array(k+1).fill(0));

function sol(){
  
  for(let i=1; i<=n; i++) { // n개의 물건.
    for(let j=1; j<=k; j++) { // k무게 까지.      
      if(ting[i].w <= j) {  // 가방에 물건을 넣을 수 있다.
        // (i번째 물건을 위해서 (i-1)번쨰 물건을 뺀다, i번째 물건을 넣지 않는다.)
        dp[i][j] = Math.max(ting[i].v + dp[i-1][j-ting[i].w], dp[i-1][j]);
      } 
      else if(ting[i].w > j) {  // 가방에 물건을 넣을 수 없다.
        dp[i][j] = dp[i-1][j];
      }
    }
  }
  console.log(dp[n][k]);
}

function main(){
  for(let i=0; i<n; i++) {
    let [w,v] = input[i+1].split(' ').map(Number);
    ting.push({
      w:w,
      v,v,
    })
  }
  //console.log(ting);
  sol();
}
main();