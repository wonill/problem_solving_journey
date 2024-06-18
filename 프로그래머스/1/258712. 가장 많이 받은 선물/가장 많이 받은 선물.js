function solution(friends, gifts) {
    let record = Array.from(Array(friends.length), () => Array(friends.length).fill(0));
    let graph = Array.from(Array(friends.length), () => [0, 0, 0, 0]);
    for (let i = 0; i < graph.length; i++){
        graph[i][0] = friends[i];
    }
    for (let i = 0; i < gifts.length; i++){
        let giftRecord = gifts[i].split(' ');
        for (let k = 0; k < record.length; k++){
            if(friends[k] == giftRecord[0]){
                for(let l = 0; l < friends.length; l++){
                    if(friends[l] == giftRecord[1]){
                        record[k][l]++;
                    }
                }
            }
        }
        for (let j = 0; j < graph.length; j++){
            if(graph[j][0] == giftRecord[0]){
                graph[j][1]++;
            }
            if(graph[j][0] == giftRecord[1]){
                graph[j][2]++;
            }
        }
    }
    for (let i = 0; i < graph.length; i++){
        graph [i][3] = graph[i][1] - graph[i][2]; 
    }
    let countArr = Array(friends.length).fill(0);
    for(let i = 0; i < friends.length; i++){
        for (let j = i + 1; j < friends.length; j++){
            if (record[i][j] > record[j][i]){
                countArr[i]++
            } else if (record[i][j] < record[j][i]) {
                countArr[j]++;
            } else {
                if(graph[i][3] > graph[j][3]) countArr[i]++;
                else if (graph[i][3] < graph[j][3]) countArr[j]++;
            }
        }
    }
    console.log(record);
    console.log(graph);
    console.log(countArr);
    return countArr.sort((a, b) => a - b)[countArr.length - 1];
}