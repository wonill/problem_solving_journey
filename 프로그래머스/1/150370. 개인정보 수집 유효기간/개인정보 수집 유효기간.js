function convert_date(date){
    let dateArr = date.split(".");
    let year = Number(dateArr[0] - 2000) * 12 * 28;
    let month = Number(dateArr[1]) * 28;
    let day = Number(dateArr[2]);
    return year + month + day;
}

function solution(today, terms, privacies) {
    var answer = [];
    let map = new Map();
    for (let term of terms) map.set(term.split(' ')[0], Number(term.split(' ')[1]) * 28);
    today = convert_date(today);
    for (let i = 0; i < privacies.length; i++){
        let days = convert_date(privacies[i].split(' ')[0]);
        if (days + map.get(privacies[i].split(' ')[1]) <= today)
            answer.push(i + 1);
    }
    return answer;
}