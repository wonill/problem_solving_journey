const fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let board = [];
inputs.forEach((input) => {
  board.push(input.split("").map(Number));
});

function solution(board) {
    // 스도쿠 조건 검사 함수
    const check = (row, col, value) => {
        // 가로줄 검사
        if (board[row].includes(value)) return false;
        // 세로줄 검사
        if (board.some((row) => row[col] === value)) return false;
        // box 검사
        const boxRow = Math.floor(row / 3) * 3;
        const boxCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[boxRow + i][boxCol + j] === value) return false;
            }
        }
        return true;
    };

    // 백트래킹 함수
    const bt = (index, value) => {
        const [row, col] = targets[index];

        // value값이 들어가도 되는지 스도쿠 조건 검사
        if (!check(row, col, value)) return;

        board[row][col] = value;

        // 백트래킹 탈출문
        if (index === targets.length - 1) {
            flag = 1;
            return;
        }

        // 다음 target 노드에 들어갈 숫자 탐색
        for (let i = 1; i <= 9; i++) {
            bt(index + 1, i);
            // 답을 찾아서 탐색 종료
            if (flag) return;
        }
        board[row][col] = 0;
    };

    // 백트래킹 탈출을 위한 플래그 변수
    let flag = 0;
    // 0의 위치 값들 저장, 해당 부분들에 대한 dfs 탐색을 위함.
    const targets = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) targets.push([i, j]);
        }
    }

    // 0이 없을 수도 있음.
    if (targets.length != 0) {
        // 0에 들어갈 숫자 dfs 탐색 시작
        for (let i = 1; i <= 9; i++) {
            bt(0, i);
            // 답을 찾아서 탐색 종료
            if (flag) break;
        }
    }

    return board;
}

console.log(
  solution(board)
    .map((v) => v.join(""))
    .join("\n")
);