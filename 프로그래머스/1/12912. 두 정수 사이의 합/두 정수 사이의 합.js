function solution(a, b) {
    return Array.from({length : Math.abs(a - b) + 1}, (undefined, i) => Math.min(a, b) + i)
        .reduce((a, b) => a + b);
}