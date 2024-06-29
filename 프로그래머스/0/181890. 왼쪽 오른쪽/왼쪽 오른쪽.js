function solution(s) {
    return s.slice(0, s.indexOf('l')).includes('r') ? s.slice(s.indexOf('r') + 1) : s.slice(0, s.indexOf('l'));
}