function getBonus(score, bonus){
    if (bonus === 'S') return score;
    if (bonus === 'D') return score ** 2;
    if (bonus === 'T') return score ** 3;
}

function is_number(num){
    return num >= '0' && num <= '9';
}

function is_ten(dartResult, i){
    return dartResult[i] === '0' && dartResult[i - 1] === '1';
}

function solution(dartResult) {
    var answer = 0;
    let scores = [];
    let darts = [];
    let dart = '';
    for (let i = 0; i < dartResult.length; i++){
        if (is_number(dartResult[i]) && !is_ten(dartResult, i)) {
            if (dart != '') darts.push(dart);
            dart = '';
        }
        dart += dartResult[i];
    }
    if (dart != '') darts.push(dart);
    for (let i = 0; i < darts.length; i++){
        let score = parseInt(darts[i]);
        let j = 0;
        while (is_number(darts[i][j])) j++;
        score = getBonus(score, darts[i][j]);
        if(darts[i][j + 1]){
            if (darts[i][j + 1] === '#') score *= -1;
            if (darts[i][j + 1] === '*'){
                score *= 2;
                if(scores.length > 0) scores[scores.length - 1] *= 2;
            }
        }
        scores.push(score);
    }
    return scores.reduce((a, b) => a + b);
}