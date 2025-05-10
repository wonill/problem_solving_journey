const check = (current, q, ans) => {
    let set = new Set(current);
    for (let i = 0; i < q.length; i++){
        let count = 0;
        
        for (let j = 0; j < 5; j++){
            if (set.has(q[i][j])){
                count++;
            }
        }
        
        if (count != ans[i]) return false;
    }
    return true;
}

function solution(n, q, ans) {
    let answer = 0;
    
    const dfs = (idx, current, now) => {
        
        if (idx === 5){
            check(current, q, ans) && answer++;
            return;
        }
        
        for (let i = now; i <= n; i++){
            current[idx] = i;
            dfs(idx + 1, current, i + 1)
        }
    }
    
    dfs(0, Array(5).fill(1), 1);
    
    
    
    return answer;
}