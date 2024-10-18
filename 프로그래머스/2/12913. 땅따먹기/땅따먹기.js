function solution(land) {
    for (let i = 1; i < land.length; i++){
        for (let j = 0; j < land[i].length; j++){
            land[i][j] += Math.max(...land[i - 1].filter((_, idx) => j != idx));
        }
    }

    return Math.max(...land[land.length - 1]);
}