const getPermutations = (arr) => {
  const result = [];
  
  const dfs = (current, rest) => {
    if (rest.length === 0) {
      result.push(current);
      return;
    }
    
    for (let i = 0; i < rest.length; i++) {
      dfs([...current, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  };
  
  dfs([], arr);
  return result;
};

const solution = (n, weak, dist) => {
  let answer = Infinity;
  const len = weak.length;
  weak = weak.concat(weak.map((v) => v + n));
  
  const permutations = getPermutations(dist);
  
  const dfs = (start, end, cnt, distArr) => {
    if (start === end) {
      answer = Math.min(answer, cnt);
      return;
    }
    
    if (cnt === distArr.length) return;
    if (cnt >= answer) return;
    
    for (let j = end - 1; j >= start; j--) {
      if (weak[j] - weak[start] <= distArr[cnt]) {
        dfs(j + 1, end, cnt + 1, distArr);
      }
    }
  };
  
  for (const perm of permutations) {
    for (let i = 0; i < len; i++) {
      dfs(i, i + len, 0, perm);
    }
  }
  
  return answer === Infinity ? -1 : answer;
};