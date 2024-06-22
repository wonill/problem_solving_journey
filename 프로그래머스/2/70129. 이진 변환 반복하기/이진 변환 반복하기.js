function solution(s) {
    let count = 0;
    let removed = 0;
    while (s != '1'){
        let tmp = '';
        for (let i = 0; i < s.length; i++){
            if (s[i] === '0') removed++;
            else tmp += '1';
        }
        s = tmp.length.toString(2);
        count++;
    }
    return [count, removed];
}