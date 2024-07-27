function solution(my_string) {
    return [...my_string].reduce((a, c) => a + (isNaN(Number(c)) ? 0 : Number(c)),0)
}