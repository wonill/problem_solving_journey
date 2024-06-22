function solution(s) {
    return Math.min(...s.split(' ').map(v => Number(v))) + ' ' + Math.max(...s.split(' ').map(v => Number(v)));
}