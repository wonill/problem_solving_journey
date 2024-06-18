function solution(participant, completion) {
    let map = new Map();
    for (let part of participant){
        if(map.has(part)) map.set(part, map.get(part) + 1);
        else map.set(part, 1);
    }
    for (let comp of completion){
        if (map.get(comp) === 1) map.delete(comp);
        else map.set(comp, map.get(comp) - 1);
    }
    for (m of map.keys()) return m;
}