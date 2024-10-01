function solution(n, info) {
    const gt = (index, count, mine, yours) => {
        if(mine > yours) {
            if(mine - yours > diff) {
                diff = mine - yours;
                answer = [...counts];
                if(n - count > 0) answer[10] = n - count;
            } else if(mine - yours === diff) {
                for(let i = 10; i >= 0; i--) {
                    if(counts[i] > answer[i]) {
                        answer = [...counts];
                        break;
                    } else if(counts[i] < answer[i]) {
                        break;
                    }
                }
            }
        }
        if(count === n) return;
        for(let i = index; i < 11; i++) {
            if(info[i] <= n - count) {
                counts[i] = info[i];
                if(info[i] !== 1) {
                    gt(i + 1, count + info[i], mine + 10 - i, yours - 10 + i);
                } else {
                    gt(i + 1, count + info[i], mine + 10 - i, yours);
                }
                counts[i] = 0;
            }
        }
    }
    
    let diff = 0;
    let yours = 0;
    for(let i = 0; i < info.length; i++) {
        if(info[i] !== 0) yours += 10 - i;
        info[i]++;
    }
    
    let answer = [-1];
    const counts = new Array(11).fill(0);
    gt(0, 0, 0, yours);
    
    return answer;
}
