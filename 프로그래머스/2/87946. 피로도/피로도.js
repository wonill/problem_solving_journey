function solution(k, dungeons) {
  let max = 0;
  let indexs = [];
  let x = 0;

  const dfs = (x) => {
    if (x === dungeons.length) {
      max = dungeons.length;
      return;
    }
    for (let i = 0; i < dungeons.length; i++) {
      if (!indexs.includes(i) && k >= dungeons[i][0]) {
        indexs.push(i);
        k -= dungeons[i][1];
        dfs(x + 1);
        indexs.pop();
        k += dungeons[i][1];
      }
      max = indexs.length > max ? indexs.length : max;
    }
  };
  dfs(x);
  return max;
}