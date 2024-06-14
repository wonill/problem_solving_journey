function solution(intStrs, k, s, l) {
    var answer = [];
    for (let i = 0; i < intStrs.length; i++){
        let tmp = Number(intStrs[i].substr(s, l));
        if (tmp > k)
            answer.push(tmp);
    }
    return answer;
}