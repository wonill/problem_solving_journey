function solution(land, height) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const len = land.length;
    const visited = Array.from({ length: len }, () => new Array(len).fill(0));
    let num = 1;
    const parent = [0];
    
    const find = (u) => {
        if (parent[u] < 0) return u;
        return (parent[u] = find(parent[u]));
    };

    const union = (u, v, value) => {
        const x = find(u);
        const y = find(v);

        if (x === y) return;

        if (parent[x] < parent[y]){
            parent[x] += parent[y];
            parent[y] = x;
        }
        else {
            parent[y] += parent[x];
            parent[x] = y;
        }
        
        answer += value;
    };
    
    const q = [];
    
    const bfs = () => {
        while(q.length) {
            const target = q.pop();
            for(let k = 0; k < 4; k++) {
                const nx = target[0] + dx[k];
                const ny = target[1] + dy[k];
                if(nx >= 0 && nx < len && ny >= 0 && ny < len && visited[nx][ny] === 0 && height >= Math.abs(land[target[0]][target[1]] - land[nx][ny])) {
                    visited[nx][ny] = num;
                    q.push([nx, ny]);
                }
            }
        }
    }
    
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(visited[i][j] !== 0) continue;
            visited[i][j] = num;
            parent[num] = -1;
            q.push([i, j]);
            bfs();
            num++;
        }
    }
    
    let answer = 0;
    const edges = [];
    
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            for(let k = 1; k < 3; k++) {
                const nx = i + dx[k];
                const ny = j + dy[k];
                if(nx >= 0 && nx < len && ny >= 0 && ny < len && visited[i][j] !== visited[nx][ny]) {
                    edges.push([visited[i][j], visited[nx][ny], Math.abs(land[i][j] - land[nx][ny])]);
                }
            }
        }
    }
    edges.sort((a, b) => a[2] - b[2]);
    
    edges.forEach((edge) => {
        union(...edge);
    });
    
    return answer;
}