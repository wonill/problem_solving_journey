function solution(n) {
    const dx = [0, -1, 0, 1];
    const dy = [1, 0, -1, 0];
    
    let answer = Array.from({length : n}, v => Array(n).fill(0));
    let value = 1;
    
    let x = 0;
    let y = 0;
    answer[x][y] = value;
    while (value < n ** 2) {
        for (let i = 0; i < 4; i++){
            while (x + dx[i] >= 0 && y + dy[i] >= 0 
                   && x + dx[i] < n && y + dy[i] < n 
                   && answer[x + dx[i]][y + dy[i]] === 0){
                x += dx[i];
                y += dy[i];
                answer [x][y] = ++value;
            }
        }
    }
    return answer;
}