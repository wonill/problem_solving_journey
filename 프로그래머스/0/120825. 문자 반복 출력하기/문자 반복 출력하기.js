function solution(my_string, n) {
    return [...my_string].flatMap(v => Array(n).fill(v)).join('');
}