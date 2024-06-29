function solution(myString) {
    return myString.split('a').map(v => v.split('A').map(v => v.toLowerCase()).join('A')).join('A');
}