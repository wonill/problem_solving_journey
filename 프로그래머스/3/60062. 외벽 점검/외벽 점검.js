function solution(n, weak, dist) {
    const dfs = (index, target, count) => {
        if(index >= weak.length - 1) {
            if(answer === -1 || count < answer) {
                answer = count;
            }
            return;
        }
        let nextIndex;
        for(let i = index + 1; i < weak.length; i++) {
            if(weak[i] > weak[index] + target) {
                nextIndex = i;
                break;
            }
            if(i === weak.length - 1) {
                if(answer === -1 || count < answer) {
                    answer = count;
                }
                return;
            }
        }
        for(let i = 0; i < dist.length; i++) {
            if(visited[i] === false) {
                visited[i] = true;
                dfs(nextIndex, dist[i], count + 1);
                visited[i] = false;
            }
        }
    }
    
    let answer = -1;
    const visited = new Array(dist.length).fill(false);
    
    for(let i = 0; i < weak.length; i++) {
        for(let j = 0; j < dist.length; j++) {
            visited[j] = true;
            dfs(0, dist[j], 1);
            visited[j] = false;
        }
        
        const temp = weak.shift();
        weak.push(temp + n);
    }
    
    return answer;
}