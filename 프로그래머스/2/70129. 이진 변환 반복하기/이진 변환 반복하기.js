function solution(s) {
    let [cnt, removed] = [0, 0];
    while (s != '1'){
        const c = s.replaceAll('0', '').length;
        removed += s.length - c;
        cnt++;
        s = c.toString(2);
    }
    return [cnt, removed]; 
}