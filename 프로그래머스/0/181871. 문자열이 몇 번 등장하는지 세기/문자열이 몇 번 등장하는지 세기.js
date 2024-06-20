function solution(myString, pat) {
    let count = 0;
    for (let i = 0; i < myString.length; i++){
        i = myString.indexOf(pat, i);
        if (i === -1) break;
        count++;
    }
    return count;
}