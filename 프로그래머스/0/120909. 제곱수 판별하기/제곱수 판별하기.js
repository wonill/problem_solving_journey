function solution(n) {
    return 2 - +(parseInt(Math.sqrt(n)) ** 2 === n);
}