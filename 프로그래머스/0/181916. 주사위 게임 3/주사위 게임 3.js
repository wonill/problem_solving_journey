function solution(a, b, c, d) {
    let map = new Map();
    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) + 1);
    map.set(c, (map.get(c) || 0) + 1);
    map.set(d, (map.get(d) || 0) + 1);
    
    if (map.size === 1) return 1111 * a;
    if (map.get(a) === 2 && map.size == 2) return (Math.max(...map.keys()) + Math.min(...map.keys())) * 
        (Math.max(...map.keys()) - Math.min(...map.keys()));
    if (map.size === 4) return Math.min(...map.keys());
    if (map.size === 2){
        let p;
        let q;
        for (let [key, value] of map) {
            if(map.get(key) === 3) p = key;
            else q = key;
        }
        return (10 * p + q) ** 2;
    }
    if (map.size === 3) {
        let p;
        let q;
        let r;
        for (let [key, value] of map) {
            if(map.get(key) === 2) p = key;
            else if (!q) q = key;
            else r = key;
        }
        return q * r;
    }
}