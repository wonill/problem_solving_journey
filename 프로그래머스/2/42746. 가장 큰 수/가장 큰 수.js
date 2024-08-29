function solution(numbers) {
		// 내림차순으로 정렬해서 차례대로 숫자를 합치면 끝.
    var answer = numbers.map((a) => String(a)).sort((a,b) => (b + a) - (a + b)).join('');
    // 0이 여러개인 예외 케이스
    if(answer[0] == '0') answer = '0';
    return answer;
}