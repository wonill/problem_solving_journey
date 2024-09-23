function solution(info, edges) {
    const arr = Array.from(new Array(info.length), () => []);
    for(let i = 0; i < edges.length; i++) {
        arr[edges[i][0]].push(edges[i][1]);
    }
    
    let answer = 0;
    const nodes = [...arr[0]];
    
    const dfs = (sheep, wolf) => {
        if(sheep <= wolf) return;
        answer = Math.max(answer, sheep);
        for(const a of nodes) {
            const index = nodes.indexOf(a);
            nodes.splice(index, 1);
            nodes.push(...arr[a]);
            if(info[a]) dfs(sheep, wolf + 1);
            else dfs(sheep + 1, wolf);
            for(let i = 0; i < arr[a].length; i++) nodes.pop();
            nodes.splice(index, 0, a);
        }
    }
    dfs(1,0);
    
    return answer;
}

