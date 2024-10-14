// 발판이 없는 상태
const EMPTY = 0;
// 발판이 있는 상태
const AVAILABLE = 1;

// 이동 방향 정의
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(board, aloc, bloc) {
    const row_len = board.length;
    const col_len = board[0].length;
    
    // DFS 호출은 게임의 한 턴을 나타내며, 깊이가 증가할 때마다 플레이어가 교체된다고 생각하면 된다.
    const dfs = (x1, y1, x2, y2) => {
		    // 발판이 사라진 경우 패배를 의미하는 false와 0을 리턴
		    // 0을 리턴하는 이유는 게임의 승부가 날 때까지 dfs의 depth 끝까지 탐색을 한 후
		    // 다시 올라올 때 0을 시작으로 count를 증가시키면서 플레이어의 이동횟수를 세주기 위한 것
        if (board[x1][y1] === EMPTY) return [false, 0];
        
        // 현재 발판을 사라지게 함 (방문처리되면 발판이 사라지므로)
        board[x1][y1] = EMPTY;
        
        // 지는 경우 최대 이동횟수
        let max_lose = 0;
        // 이기는 경우 최소 이동횟수
        let min_win = Infinity;
        
        for (let i = 0; i < 4; i++){
		        // 다음 위치
            const nx = x1 + dx[i];
            const ny = y1 + dy[i];
            // 이동가능한 위치인지 체크
            if (nx >= 0 && nx < row_len && ny >= 0 && ny < col_len && board[nx][ny] === AVAILABLE) {
		            // 다음 턴은 플레이어B가 이동할 차례이므로
		            // 플레이어A와 플레이어B의 좌표를 바꿔서 넣어준다. 
		            // (이 함수에서 첫번째,두번째 인자의 좌표가 이동시킬 좌표이므로)
		            // 한 depth 증가할때마다 플레이어가 바뀐다고 보면됨
		            // true 반환 시 해당 플레이어가 마지막에 승리를 한 경우부터 올라온 경우인데
		            // 상대 입장에서 승리를 했을 경우 내 입장에선 패배이므로
		            // true 반환시 lose에 해당
                const [lose, count] = dfs(x2, y2, nx, ny);
                // 문제 조건에서 지는 경우 최대한 오래 버티라고 했으므로
                // 패배 시 네 방향에서 탐색한 패배한 경우의 이동횟수 중 가장 큰 값으로 갱신
                if (lose) max_lose = Math.max(max_lose, count + 1);
                // 이기는 경우 최대한 빨리 승리하라고 했으므로
                // 승리 시 네 방향에서 탐색한 승리한 경우의 이동횟수 중 가장 작은 값으로 갱신
                else min_win = Math.min(min_win, count + 1);
            }
        }
        
        // 발판 복구
        board[x1][y1] = AVAILABLE;
        
        // 네 방향에서 탐색한 케이스 승리하는 경우가 있을 경우
        if (min_win < Infinity) return [true, min_win];
        // 네 방향에서 탐색한 케이스 모두 현재 플레이어가 패배할 경우
        else return [false, max_lose];
    }
    
    const [_, count] = dfs(aloc[0], aloc[1], bloc[0], bloc[1]);
    return count;
}
