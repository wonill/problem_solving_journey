function solution(s) {
    return s.split('').map((v, i) => i === 0 || s[i - 1] === ' ' ? s[i].toUpperCase() : s[i].toLowerCase()).join('');
}