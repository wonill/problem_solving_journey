const findIntersection = (line1, line2) => {
    const [a, b, e] = line1;
    const [c, d, f] = line2;
    
    if (a * d - b * c === 0) return [null];
    return [(b*f - e*d) / (a*d - b*c), (e*c - a*f) / (a*d - b*c)]
}

function solution(line) {
    let answer;
    let intersections = [];
    for (let i = 0; i < line.length - 1; i++) {
        for (let j = i + 1; j < line.length; j++) {
            const intersection = findIntersection(line[i], line[j]);
            if (intersection.every(v => Number.isInteger(v))) intersections.push(intersection);
        }
    }
    const [maxX, minX, maxY, minY] = intersections.reduce((acc, [x, y]) =>  
            acc = [Math.max(x, acc[0]), Math.min(x, acc[1]), Math.max(y, acc[2]), Math.min(y, acc[3])], 
                         [-Infinity, Infinity, -Infinity, Infinity]);
    const [col, row] = [maxX - minX + 1, maxY - minY + 1];
    answer = Array.from({length: row}, () =>  Array(col).fill('.'));
    intersections.forEach(([x, y]) => answer[maxY - y][x - minX] = '*');
    
    return answer.map(v => v.join(''));
}