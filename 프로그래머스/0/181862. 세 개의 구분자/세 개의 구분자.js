function solution(myStr) {
    let s = myStr.replaceAll('a',' ').replaceAll('b', ' ').replaceAll('c', ' ').split(' ').filter(v => v);
    return s.length ? s : ['EMPTY'];
}