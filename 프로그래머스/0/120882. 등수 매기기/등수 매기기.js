function solution(score) {
    let averages = score.map(([e, m]) => (e + m) / 2);
    let grades = [...averages];
    grades.sort((a, b) => b - a);
    let map = new Map();
    let tmp;
    for (let i = 0; i < grades.length; i++) {
        if (i > 0 && grades[i - 1] == grades[i]) tmp++;
        else map.set(grades[i], i + 1);
        tmp = i + 1;
    }
    for(let i = 0; i < averages.length; i++) averages[i] = map.get(averages[i]);
    return averages;
}
