function solution(s) {
    let map = new Map();
    for (let c of s) map.set(c, (map.get(c) || 0) + 1);
    for (let [key, value] of map) if (value != 1) map.delete(key);
    return [...map.keys()].sort().join('');
}