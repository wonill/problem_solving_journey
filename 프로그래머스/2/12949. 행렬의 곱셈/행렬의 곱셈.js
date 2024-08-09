function solution(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((v, i) => row.reduce((a, b, c) => a + b * arr2[c][i],0)));
}


