const isValidPosition = (visited, row, col) => {
    for (let i = 0; i < row; i++) {
        const targetIdx = visited[i].indexOf(true);
        if (targetIdx === col || Math.abs(i - row) === Math.abs(targetIdx - col)){
            return false;
        }
    }
    return true;
}

function solution(n) {
    let answer = 0;
    const visited = Array.from({length: n}, () => Array(n).fill(false));
    
    const dfs = (row) => {
        if (row === n) {
            answer++;
            return;
        }
        
        for (let col = 0; col < n; col++){
            if (isValidPosition(visited, row, col)){
                visited[row][col] = true;
                dfs(row + 1);
                visited[row][col] = false;
            }
        }
        
        
    }
    
    dfs(0);
    
    return answer;
}