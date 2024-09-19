function solution(genres, plays) {
    const genreMap = new Map();
    
    // 장르별 총 재생 횟수와 노래 정보를 저장
    genres.forEach((genre, index) => {
        const data = genreMap.get(genre) || { total: 0, songs: [] };
        data.total += plays[index];
        data.songs.push([index, plays[index]]);
        genreMap.set(genre, data);
    });
    
    // 장르별 총 재생 횟수 기준으로 정렬
    const sortedGenres = [...genreMap.entries()]
        .sort((a, b) => b[1].total - a[1].total);
    
    const answer = [];
    
    // 각 장르에서 최대 2곡씩 선택
    sortedGenres.forEach(([genre, data]) => {
        data.songs.sort((a, b) => b[1] - a[1]);
        answer.push(...data.songs.slice(0, 2).map(song => song[0]));
    });
    
    return answer;
}