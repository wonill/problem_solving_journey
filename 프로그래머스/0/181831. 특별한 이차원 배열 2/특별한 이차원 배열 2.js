function solution(arr) {
    return +arr.every((v, i) => v.every((_, j) => arr[i][j] === arr[j][i]));
}