function solution(my_string, n) {
    return my_string.split('').flatMap(v => Array(n).fill(v)).join('');
}