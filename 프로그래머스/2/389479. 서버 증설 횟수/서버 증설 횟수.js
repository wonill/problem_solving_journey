function solution(players, m, k) {
    var answer = 0;
    let servers = [];
    players.forEach((player, time) => {
        const minRequiredServer = Math.floor(player / m)
        while (servers.length < minRequiredServer) {
            servers.push(k)
            answer++;
        }
        servers = servers.map(server => server - 1).filter(server => server > 0);
    })
    
    return answer;
}