function solution(s) {
    return s.split(' ').filter((v, i, arr) => !(arr[i + 1] === 'Z') && v != 'Z').reduce((a, c) => a + Number(c), 0);
}