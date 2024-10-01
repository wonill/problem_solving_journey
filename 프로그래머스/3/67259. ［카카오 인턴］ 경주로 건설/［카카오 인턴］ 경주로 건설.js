function solution(board) {
    const dx = [-1,0,1,0];
    const dy = [0,1,0,-1];
    
    const len = board.length;
    const dp = Array.from({length: len}, () => Array.from({length: len}, () => new Array(4).fill(Infinity)));
    
    const q = [[0, 0, 1, 0], [0, 0, 2, 0]];
    dp[0][0][1] = 0;
    dp[0][0][2] = 0;
                          
    while(q.length) {
        const target = q.shift();
        for(let i = 0; i < 4; i++) {
            const nx = target[0] + dx[i];
            const ny = target[1] + dy[i];
            if(nx >= 0 && nx < len && ny >= 0 && ny < len && board[nx][ny] === 0) {
                const newCost = target[2] === i ? target[3] + 100 : target[3] + 600;
                if(newCost < dp[nx][ny][i]) {
                    dp[nx][ny][i] = newCost;
                    q.push([nx, ny, i, newCost]);
                }
            }
        }
    }
    
    return Math.min(...dp[len - 1][len - 1]);
}