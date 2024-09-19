function solution(genres, plays) {
    const genreMap = new Map();
    const songMap = new Map();

    // 장르별 재생 횟수와 노래 정보를 저장
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const playCount = plays[i];

        // 장르별 총 재생 횟수
        genreMap.set(genre, (genreMap.get(genre) || 0) + playCount);

        // 노래 정보
        if (!songMap.has(genre)) songMap.set(genre, []);
        songMap.get(genre).push({ index: i, plays: playCount });
    }

    // 장르별 총 재생 횟수를 기준으로 정렬
    const sortedGenres = [...genreMap.entries()].sort((a, b) => b[1] - a[1]);

    const answer = [];

    // 각 장르별로 상위 2곡 선택
    for (const [genre] of sortedGenres) {
        const songs = songMap.get(genre);
        // 노래를 재생 횟수 기준으로 내림차순 정렬
        songs.sort((a, b) => b.plays - a.plays);
        
        // 상위 2곡의 인덱스 추가
        for (let i = 0; i < Math.min(2, songs.length); i++) {
            answer.push(songs[i].index);
        }
    }

    return answer;
}
