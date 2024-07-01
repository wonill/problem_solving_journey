function solution(n, control) {
    let map = new Map();
    map.set('w', 1);
    map.set('s', -1);
    map.set('d', 10);
    map.set('a', -10);
    return control.split('').reduce((a, b) => a + map.get(b), n);
}