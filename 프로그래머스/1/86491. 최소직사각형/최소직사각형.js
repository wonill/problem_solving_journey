function solution(sizes) {
    sizes.forEach(v => v.sort((a, b) => a - b));
    return sizes.reduce((a, b) => Math.max(a, b[0]), 0) * sizes.reduce((a, b) => Math.max(a, b[1]), 0);
}