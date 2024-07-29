function solution(arr) {
    let len = Math.max(Math.max(...arr.map(v => v.length)), arr.length) ;
    while (arr.length < len) arr.push([]);
    arr.forEach(v => { while (v.length < len) v.push(0) });
    return arr;
}