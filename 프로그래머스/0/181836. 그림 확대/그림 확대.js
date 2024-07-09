function solution(picture, k) {
    return picture.flatMap(v => Array(k).fill(v.split('').map(a => a.repeat(k)).join('')));
}