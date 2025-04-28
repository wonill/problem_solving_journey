function solution(k, tangerine) {
    let map = new Map();
    tangerine.forEach((v) => {
        map.set(v, (map.get(v) || 0) + 1);
    })
    let counts = Array.from(map.values()).sort((a, b) => b - a);
    for (var i = 0; k > 0; i++) k -= counts[i];
    
    return i;
}
