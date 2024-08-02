function solution(sides) {
    return Array.from({length: 2000}, (_, i) => i + 1).filter(side => {
        const max = Math.max(...sides, side);
        const [side1, side2] = [...sides, side].sort((a, b) => (b - a)).slice(1);
        return max < side1 + side2;
    }).length;
}