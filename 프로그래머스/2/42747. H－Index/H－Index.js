function solution(citations) {
    var answer = 0;
    citations.sort((a, b) => a - b);
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] <= citations.length - i) answer = citations[i];
        else return Math.max(citations[i - 1] ? citations[i - 1] : 0, citations.length - i);
    }
    return answer;
}