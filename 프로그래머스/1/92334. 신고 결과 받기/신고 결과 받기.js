function solution(id_list, report, k) {
    var answer = [];
    let removeDup =  [...new Set(report)];
    let reported = removeDup.map(v => v.split(' ')[1]);
    let reportedMap = new Map();
    for (let i = 0; i < reported.length; i++){
        if(reportedMap.get(reported[i])) reportedMap.set(reported[i], reportedMap.get(reported[i]) + 1);
        else reportedMap.set(reported[i], 1);
    }
    let reportList = new Map();
    for (let id of id_list) reportList.set(id, []);
    for (let i = 0; i < removeDup.length; i++){
        let rep = removeDup[i].split(' ')[0];
        let reported = removeDup[i].split(' ')[1];
        reportList.get(rep).push(reported);
    }
    
    for (let [key, value] of reportList){
        let count = 0;
        for (let i = 0; i < value.length; i++){
            if(reportedMap.get(value[i]) >= k) count++;
        }
        answer.push(count);
    }
    return answer;
}
/*
1. 일단 report를 셋으로 중복제거 후 다시 배열에 담음
2. 1번 인덱스인 신고당한 놈만 빼와서 맵을 통해 몇 번 신고당했는지 알아냄
3. id를 key로 하고 신고한 사람목록의 배열을 value로 하는 해쉬맵을 만듬 // 배열길이 0인경우도 생각
4. 맵을 돌면서 각각의 key에 해당하는 배열도 돈다.
5. 그 배열의 요소를 key로 하는 reported맵의 신고당한 횟수가 k 이상인지 확인하고 카운트
6. 한 번 다 돌았으면 count를 배열에 푸쉬
*/