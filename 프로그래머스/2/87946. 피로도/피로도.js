
function solution(k, dungeons) {
		// 던전 개수가 적어서 백트래킹 안써도 될것 같아서 dfs 선에서 끝냄
    function dfs(count, lef) {
			  // 방문한 던전 개수 최고 기록
        if(answer < count) answer = count;
        
        // 방문 가능 및 피로도 가능 검사
        for(let i = 0; i < dungeons.length; i++) {
            if(visited[i] == false && lef >= dungeons[i][0]) {
                visited[i] = true;
                dfs(count + 1, lef - dungeons[i][1]);
                visited[i] = false;
            }
        }
    }
    
    var answer = 0;
    // 방문 여부 저장
    const visited = new Array(dungeons.length).fill(false);
    dfs(0, k);
    return answer;
}