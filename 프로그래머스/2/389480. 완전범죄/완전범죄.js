function solution(info, n, m) {
    var answer = Infinity;
    let a = 0;
    let b = 0;
    const states = new Set()
    const dfs = (k) => {
        // if (answer !=Infinity && a > answer)return ;
        if (a >= n || b >= m) {
            return;
        } 
        if (states.has(`${a},${b},${k}`)) {
            return;
        }
        states.add(`${a},${b},${k}`);
        if (k === info.length) {
            answer = Math.min(answer, a);
            return;
        }
        
        for (let i = 0; i < info[k].length; i++) {
            a += i === 0 ? info[k][0] : 0;
            b += i === 1 ? info[k][1] : 0;
            
            dfs(k + 1);  
            
            a -= i === 0 ? info[k][0] : 0;
            b -= i === 1 ? info[k][1] : 0;
        }
    }
    dfs(0)
    
    
    return answer === Infinity ? -1 : answer;
}