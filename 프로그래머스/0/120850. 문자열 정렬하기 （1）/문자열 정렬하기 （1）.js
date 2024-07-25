function solution(my_string) {
    return [...my_string].filter(v => !isNaN(Number(v))).map(Number).sort((a, b) => a - b);
}