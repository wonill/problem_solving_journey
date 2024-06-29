function solution(myString, pat) {
    return +myString.replaceAll('B', 'b').replaceAll('A', 'B').replaceAll('b', 'A').includes(pat);
}