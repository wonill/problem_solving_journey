function isValid(visited, row, i){
    for (let a = 0; a < row; a++){
        const b = visited[a].indexOf(true);
        if (b === i || Math.abs(b - i) === Math.abs(row - a)) return false;
    }
    return true;
}


function solution(n) {
    let answer = 0;
    let visited = Array.from({length:n}, () => Array(n).fill(false));
    
    const dfs = (row) => {
        if (row === n) {
            answer++;
            return;
        }
        
        for (let i = 0; i < visited.length; i++){
            if(isValid(visited, row, i)){
                visited[row][i] = true;
                dfs(row + 1);
                visited[row][i] = false;
            }
        }
    }
    dfs(0);
    
    return answer;
}