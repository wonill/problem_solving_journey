function solution(genres, plays) {
    let answer = [];
    const playCount = new Map();
    genres.forEach((genre, i) => {
        playCount.set(genre, (playCount.get(genre) || 0) + plays[i]);
    })
    
    const ranks = Array.from(playCount).sort((a, b) => b[1] - a[1]);
    
    plays = plays.map((play, idx) => [genres[idx], play, idx]);
    for (const [genre] of ranks) {
        const filterd = plays.filter(play => play[0] === genre).sort((a, b) => b[1] - a[1]).slice(0, 2);
        filterd.forEach(v => answer.push(v[2]));
    }
    
    return answer;
}