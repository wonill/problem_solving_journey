function solution(strArr) {
    let map = new Map();
    for (let str of strArr){
        map.get(str.length) ? map.set(str.length, map.get(str.length) + 1) : map.set(str.length, 1); 
    }
    return Math.max(...[...map].map(v => v[1]));
}