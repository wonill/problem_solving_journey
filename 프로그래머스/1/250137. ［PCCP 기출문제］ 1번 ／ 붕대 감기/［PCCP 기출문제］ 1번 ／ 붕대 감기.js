function solution(bandage, health, attacks) {
    let consecutiveHeal = 0;
    let hp = health;
    let attackTime = 0;
    for (let i = 0; i <= attacks[attacks.length - 1][0]; i++){
        if (i === attacks[attackTime][0]){
            hp -= attacks[attackTime][1];
            consecutiveHeal = 0;
            attackTime++;
            if (hp <= 0) break;
            continue;
        }
        hp += hp + bandage[1] > health ? health - hp : bandage[1];
        consecutiveHeal++;
        if (consecutiveHeal === bandage[0]){
            hp += hp + bandage[2] > health ? health - hp : bandage[2]; 
            consecutiveHeal = 0;
        }
    }
    if (hp <= 0) hp = -1;
    return hp;
}