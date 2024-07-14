function solution(A, B) {
    for (let i = 0; i < A.length; i++) if (A.slice(A.length - i) + A.slice(0, A.length - i) === B) return i;
    return -1;
}
