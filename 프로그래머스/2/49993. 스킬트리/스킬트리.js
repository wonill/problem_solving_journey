function isAscending(arr){
    for (let i = 0; i < arr.length - 1; i++){
        if(arr[i] >= arr[i + 1]) return false;
    }
    return true;
}

function solution(skill, skill_trees) {
    let answer = 0;
    let k = 27;
    skill = skill.split('');
    skill_trees.forEach(v => {
        let arr = [];
        skill.forEach(s => arr.push(v.indexOf(s) === -1 ? k++ : v.indexOf(s)));
        if (isAscending(arr)) {
            console.log(v);
            answer++;
        }
    });
    return answer;
}