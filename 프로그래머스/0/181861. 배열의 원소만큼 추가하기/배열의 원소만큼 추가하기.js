function solution(arr) {
    return arr.reduce((a, b) => a.concat(Array(b).fill(b)), []);
}