function solution(lines) {
    const field = Array(200).fill(0);
    lines.forEach(([a, b]) => {
        for(;a < b; a++) field[a+100]++;
    });
    return field.reduce((a, c) => c > 1 ? ++a : a, 0);
}