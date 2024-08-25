const cases = [];
const explorableDungeons = [];

const recursion = (caseSet, start, end) => {
    if (start === end) {
        cases.push(caseSet);
        return ;
    };
    for (let i = 0; i < end; i++){
        if (!caseSet.has(i)) {
            recursion(new Set([...caseSet, i]), start + 1, end);
        }
    }
}

function solution(k, dungeons) {
    let caseSet = new Set();
    recursion(caseSet, 0, dungeons.length);
    cases.forEach(caseSet => {
        let explorable = 0;
        let remainFatigue = k;
        for (const dungeonIdx of caseSet){
            const minRequiredFatigue = dungeons[dungeonIdx][0];
            const fatigueUsage = dungeons[dungeonIdx][1];
            if (remainFatigue < minRequiredFatigue || remainFatigue - fatigueUsage < 0) break;
            remainFatigue -= fatigueUsage;
            explorable++;
        }
        explorableDungeons.push(explorable);
    });
    return Math.max(...explorableDungeons);
}