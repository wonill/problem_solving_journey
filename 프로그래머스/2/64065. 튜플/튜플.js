function solution(s) {
    let numbers = s.replaceAll('{', '').replaceAll('}', '').split(',');
    let map = new Map();
    numbers.forEach(v => {
        map.set(v, (map.get(v) || 0) + 1);
    })
    return [...map].sort((a, b) => b[1] - a[1]).map(v => Number(v[0]));
}