function solution(n, weak, dist) {
    const len = weak.length;
    weak = weak.concat(weak.map(v => v + n));
    dist.sort((a, b) => b - a);
    
    let answer = Infinity;
    
    const dfs = (index, visited, count) => {
        if (count >= answer) return;
        if (visited === (1 << len) - 1) {
            answer = Math.min(answer, count);
            return;
        }
        
        if (count === dist.length) return;
        
        const distance = dist[count];
        for (let start = index; start < index + len; start++) {
            let end = weak[start] + distance;
            let nextVisited = visited;
            
            for (let i = start; i < start + len; i++) {
                if (weak[i] <= end) {
                    nextVisited |= (1 << (i % len));
                } else {
                    break;
                }
            }
            
            if (nextVisited !== visited) {
                dfs(start + 1, nextVisited, count + 1);
            }
        }
    };
    
    for (let i = 0; i < len; i++) {
        dfs(i, 0, 0);
    }
    
    return answer === Infinity ? -1 : answer;
}