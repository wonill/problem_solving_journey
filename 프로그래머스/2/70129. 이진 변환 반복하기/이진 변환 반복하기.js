function solution(s) {
    let [cnt, removed] = [0, 0];
    while (s != '1'){
        const x = s.replaceAll('0', '');
        removed += s.length - x.length;
        cnt++;
        s = x.length.toString(2);
    }
    return [cnt, removed]; 
}