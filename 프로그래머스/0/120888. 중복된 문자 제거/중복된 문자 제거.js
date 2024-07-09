function solution(my_string) {
    return [...new Set(my_string)].reduce((a, b) => a + b);
}