function solution(s) {
    let [cnt, removed] = [0, 0];
    while (s != '1'){
        removed += s.length - s.replaceAll('0','').length;
        cnt++;
        s = s.replaceAll('0','').length.toString(2);
    }
    return [cnt, removed]; 
}