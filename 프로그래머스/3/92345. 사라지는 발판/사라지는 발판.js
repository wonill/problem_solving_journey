const EMPTY = 0;
const AVAILABLE = 1;

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(board, aloc, bloc) {
    const row_len = board.length;
    const col_len = board[0].length;
    
    const dfs = (board, x1, y1, x2, y2) => {
        if (board[x1][y1] === EMPTY) return [false, 0];
        
        board[x1][y1] = EMPTY;
        
        let max_lose = 0;
        let min_win = Infinity;
        
        for (let i = 0; i < 4; i++){
            const nx = x1 + dx[i];
            const ny = y1 + dy[i];
            if (nx >= 0 && nx < row_len && ny >= 0 && ny < col_len && board[nx][ny] === AVAILABLE) {
                const [lose, count] = dfs(board, x2, y2, nx, ny);
                if (lose) max_lose = Math.max(max_lose, count + 1);
                else min_win = Math.min(min_win, count + 1);
            }
        }
        
        board[x1][y1] = AVAILABLE;
        
        if (min_win < Infinity) return [true, min_win];
        else return [false, max_lose];
    }
    
    const [_, count] = dfs(board, aloc[0], aloc[1], bloc[0], bloc[1]);
    return count;
}
