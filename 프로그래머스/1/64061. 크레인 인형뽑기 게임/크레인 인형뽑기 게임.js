function solution(board, moves) {
    let answer = 0;
    let stack = [];
    // 행렬을 90도 돌려서 빈 공간 삭제
    board = board.map((_, row) => board.map(col => col[row]).reverse()).map(v => v.filter(v => v != 0));
    moves.forEach(move => {
		    // move 위치에 해당하는 인형 뽑기
        let pick = board[move - 1].pop();
        // 뽑은게 없다면 continue (forEach의 return == for문의 continue)
        if (!pick) return;
        // 뽑은 인형이 스택 맨 위에 있는거랑 같으면 스택에서 뽑고
        if (stack[stack.length - 1] === pick) {
            stack.pop();
            answer += 2;
        // 다르면 추가
        } else stack.push(pick);
    })
    return answer;
}
