
function solution(players, callings) {
    let playerMap = new Map();
    for (let i = 0; i < players.length; i++) playerMap.set(players[i], i);
    for (let call of callings){
        let rightIndex = playerMap.get(call);
        let leftIndex = playerMap.get(players[rightIndex - 1]);
        playerMap.set(call, leftIndex);
        playerMap.set(players[rightIndex - 1], rightIndex);
        let tmp = players[rightIndex];
        players[rightIndex] = players[leftIndex];
        players[leftIndex] = tmp;
    }
    return players;
}