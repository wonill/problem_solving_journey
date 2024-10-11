const EMPTY = 0;
const AVAILABLE = 1;

// 현재 플레이어 좌표 : r1, c1
// 상대 플레이어 좌표 : r2, c2
const play = (board, r1, c1, r2, c2) => {
    if (board[r1][c1] == EMPTY) return [false, 0];
    board[r1][c1] = EMPTY;
    const row = board.length;
    const col = board[0].length;
    let min_win = Infinity;
    let max_lose = 0;
    for (let [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
        const [nr, nc] = [r1 + dr, c1 + dc];
        if (nr >= 0 && nr < row && nc >= 0 && nc < col && board[nr][nc] == AVAILABLE) {
            const [lose, count] = play(board, r2, c2, nr, nc);
            if (lose) max_lose = Math.max(max_lose, count + 1);
            else min_win = Math.min(min_win, count + 1);
        }
    }
    board[r1][c1] = AVAILABLE;
    if (min_win < Infinity) return [true, min_win];
    else return [false, max_lose];
}

function solution(board, aloc, bloc) {
    const [ar, ac] = aloc;
    const [br, bc] = bloc;
    const [_, count] = play(board, ar, ac, br, bc);
    return count;
}

