function solution(N, stages) {
    let failureRate = [];
    stages.sort((a, b) => a - b);
    for (let stage = 1; stage <= N; stage++){
        let fail = 0;
        let challenge = 0;
        for (let i = 0; i < stages.length; i++){
            if (stage <= stages[i]) challenge++;
            if (stage == stages[i]) fail++;
        }
        if (challenge === 0) failureRate.push([stage, 0]);
        else failureRate.push([stage, fail / challenge]);
    }
    return failureRate.sort((a, b) => {
        if (b[1] > a[1]) return 1;
        if (b[1] < a[1]) return -1;
        else return a[0] - b[0];
    }).map(v => v[0]);
}