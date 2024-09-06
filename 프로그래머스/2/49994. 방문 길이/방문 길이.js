let visited = new Set();

const move = {
    'U': (location) => location[1]++,
    'D': (location) => location[1]--,
    'L': (location) => location[0]--,
    'R': (location) => location[0]++,
}

const isEnclosed = {
    'U':(location) => location[1] > 4,
    'D': (location) => location[1] < -4,
    'L': (location) => location[0] < -4,
    'R': (location) => location[0] > 4,
}

function solution(dirs) {
    var answer = 0;
    let location = [0, 0];
    for (let dir of dirs){
        if (isEnclosed[dir](location)) continue;
        let prev = location[0] + '' + location[1];
        move[dir](location);
        let next = location[0] + '' + location[1];
        if (!visited.has(prev + next) && !visited.has(next + prev)){
            answer++;
            visited.add(prev + next);
            visited.add(next + prev);
        }
        console.log(location, answer);
    }
    return answer;
}
