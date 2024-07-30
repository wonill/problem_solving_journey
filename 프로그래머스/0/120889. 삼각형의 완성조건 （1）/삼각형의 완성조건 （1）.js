function solution(sides) {
    const [longest, side1, side2] = sides.sort((a, b) => b - a);
    return 2 - +(longest < side1 + side2);
}