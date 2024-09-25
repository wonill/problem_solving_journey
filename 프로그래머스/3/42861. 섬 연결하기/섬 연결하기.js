function solution(n, costs) {
    const find = (a) => {
        if(parent[a] < 0) return a;
        return parent[a] = find(parent[a]);
    }
    const union = (a, b, c) => {    
        a = find(a);
        b = find(b);
        if(a == b) return;
        answer += c;
        if(parent[a] < parent[b]) {
            parent[a] += parent[b];
            parent[b] = a;
        }
        else {
            parent[b] += parent[a];
            parent[a] = b;
        }
    }
    var answer = 0;
    let parent = new Array(n).fill(-1);
    costs.sort((a, b) => a[2] - b[2]);
    for(let i = 0; i < costs.length; i++) {
        union(costs[i][0], costs[i][1], costs[i][2]);
    }
    return answer;
}