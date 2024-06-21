function solution(survey, choices) {
    var answer = '';
    let personality = ["R", "T", "C", "F", "J", "M", "A", "N"];
    let scoreMap = [[0, 0], [0, 3], [0 ,2], [0, 1], [0, 0] , [1, 1], [1, 2], [1, 3]];
    let map = new Map();
    for (p of personality) map.set(p, 0);
    for (let i = 0; i < survey.length; i++){
        let choice = scoreMap[choices[i]][0];
        let score = scoreMap[choices[i]][1];
        map.set(survey[i][choice] ,map.get(survey[i][choice]) + score);
    }
    answer += map.get("T") > map.get("R") ? 'T': 'R';
    answer += map.get("F") > map.get("C") ? 'F': 'C';
    answer += map.get("M") > map.get("J") ? 'M': 'J';
    answer += map.get("N") > map.get("A") ? 'N': 'A';
    return answer;
}