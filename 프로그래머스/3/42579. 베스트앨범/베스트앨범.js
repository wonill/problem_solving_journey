function solution(genres, plays) {
    const genreMap = new Map();
    let songInfo = [];
    
    for(let i = 0; i < genres.length; i++) {
        genreMap.set(genres[i], (genreMap.get(genres[i]) || 0) + plays[i]);
        songInfo.push({ index: i, genre: genres[i], plays: plays[i] });
    }
    
    songInfo = songInfo.sort((a, b) => b.plays - a.plays);
    const order = Array.from(genreMap.entries()).sort((a, b) => b[1] - a[1]);
    const answer = [];
    for(const [a, _] of order) {
        songInfo.filter(ele => ele.genre === a).forEach((ele, index) => {
            if(index < 2) {
                answer.push(ele.index);
            }
        })
    }
    return answer;
}