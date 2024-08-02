function solution(a, b) {
    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;
    if (a % b === 0) b = 1;
    return b === 1 ? 1: 2;
}