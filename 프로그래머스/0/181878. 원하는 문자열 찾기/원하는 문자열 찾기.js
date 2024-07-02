function solution(myString, pat) {
    return myString.match(new RegExp(pat, 'i')) ? 1 : 0;
}