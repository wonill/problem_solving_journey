function solution(land) {
    for (let i = 1; i < land.length; i++) {
        const prev = land[i - 1];
        land[i][0] += Math.max(prev[1], prev[2], prev[3]);
        land[i][1] += Math.max(prev[0], prev[2], prev[3]);
        land[i][2] += Math.max(prev[1], prev[0], prev[3]);
        land[i][3] += Math.max(prev[1], prev[2], prev[0]);
    }
    return Math.max(...land[land.length - 1]);
}