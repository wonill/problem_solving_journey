function solution(strArr) {
    let map = new Map();
    for (let str of strArr){
        map.set(str.length, (map.get(str.length) || 0) + 1);
    }
    return Math.max(...[...map].map(v => v[1]));
}