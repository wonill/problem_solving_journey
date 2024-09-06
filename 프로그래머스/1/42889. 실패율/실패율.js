function solution(N, stages) {
    let failureRate = [];
    stages.sort((a, b) => a - b);
    let i = 0;
    let stage = 0;
    while (++stage <= N){
        let start = i;
        while (stages[i] === stage) i++;
        const count = i - start;
        failureRate.push((count / (stages.length - start)) || 0);
    }
    return failureRate.map((v, i) => [i + 1, v]).sort((a, b) => b[1] - a[1] != 0 ? b[1] - a[1] : a[0] - b[0]).map(val => val[0]);
}