function solution(sides) {
    sides.sort((a, b) => b - a);
    return 2 - +(sides[0] < sides[1] + sides[2]);
}