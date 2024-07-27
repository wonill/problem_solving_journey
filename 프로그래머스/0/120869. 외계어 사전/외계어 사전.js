function solution(spell, dic) {
    return 2 - +dic.some(word => [...word].every(v => spell.includes(v)) 
                         && !spell.some(v => !word.includes(v)));
}