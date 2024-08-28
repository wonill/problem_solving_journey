function solution(k, dungeons) {
  let max = 0;
  let visited = new Set();

  const dfs = (x, k) => {
    max = Math.max(visited.size, max);

    for (let i = 0; i < dungeons.length; i++) {
      if (!visited.has(i) && k >= dungeons[i][0]) {
        visited.add(i);
        dfs(x + 1, k - dungeons[i][1]);
        visited.delete(i);
      }
      max = visited.size > max ? visited.size : max;
    }
  };
  dfs(0, k);
  return max;
}