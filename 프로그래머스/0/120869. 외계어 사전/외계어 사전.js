function solution(spell, dic) {
    return 2 - +dic.some(d => spell.sort().toString() == [...d].sort().toString());
}