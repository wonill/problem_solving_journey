const calculateScore = (appeach, lion) => {
    let appeachScore = 0;
    let lionScore = 0;
    for (let i = 0; i < appeach.length; i++){
        if (appeach[i] === 0 && lion[i] === 0) continue;
        if (appeach[i] >= lion[i]) appeachScore += 10 - i;
        else lionScore += 10 - i;
    }
    return lionScore - appeachScore;
}

function solution(n, info) {
    let candidates = [];
    let lion = [];
    let max = 0;
    const dfs = (arrow, x) => {
        if (x === 11) {
            if (arrow) lion[10] += arrow;
            const score = calculateScore(info, lion);
            if (score > max) {
                max = score;
                candidates = [lion.slice()];
            }
            else if (max != 0 && score === max) candidates.push(lion.slice());
            return ;
        }
        
        for (let i  of [0, info[x] + 1]){
            if (arrow >= i) {
                lion.push(i);
                dfs(arrow - i, x + 1);
                lion.pop();
            }
        }
    }
    
    dfs(n, 0);
    
    candidates.sort((a, b) => {
        for (let i = a.length - 1 ; i >= 0; i--){
            if (a[i] > b[i]) return -1;
            if (a[i] < b[i]) return 1;
        }
        return 0;
    })
    
    return candidates.length ? candidates[0] : [-1];
}