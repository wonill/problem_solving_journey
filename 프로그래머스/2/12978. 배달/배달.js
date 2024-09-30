function solution(N, road, K) {
    let graph = Array.from({length : N + 1}, (_, i) => 
                           Array.from({length : N + 1}, (_, j) => i === j ? 0 : 1e9));
    
    road.forEach(([a, b, c]) => {
        graph[a][b] = Math.min(graph[a][b], c);
        graph[b][a] = graph[a][b];
    });
    for (let k = 1; k <= N; k++){
        for (let a = 1; a <= N; a++){
            for (let b = 1; b <= N; b++){
                graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
            }
        }
    }
    return graph[1].reduce((a, c) => a + (c <= K),0);
}