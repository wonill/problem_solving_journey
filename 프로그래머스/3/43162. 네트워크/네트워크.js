function solution(n, computers) {
    var answer = 0;
    let visited = new Set();
    
    const dfs = (start) => {
        visited.add(start);
        
        for (let i = 0; i < n; i++){
            if (visited.has(i)) continue;
            if (computers[start][i] === 1) dfs(i);
        }
    }
    
    for (let i = 0; i < n; i++){
        if (visited.has(i)) continue;
        dfs(i);
        answer++;
    }
    
    return answer;
}