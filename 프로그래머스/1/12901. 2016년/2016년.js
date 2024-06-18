function solution(a, b) {
    let answer = '';
    let dayOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let lastDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = 0;
    for (let i = 0; i < a - 1; i++) day += lastDay[i];
    day += b;
    return 4 + day % 7 < 7 ? dayOfWeek[4 + day % 7] : dayOfWeek[(4 + day % 7) % 7];
}