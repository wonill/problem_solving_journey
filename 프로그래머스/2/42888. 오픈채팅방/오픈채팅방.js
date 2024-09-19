function solution(record) {
    const userMap = new Map();
    const answer = [];
    const messages = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    };

    // 첫 번째 순회: 최종 닉네임 저장
    for (const r of record) {
        const [action, id, nickname] = r.split(' ');
        if (action !== 'Leave') userMap.set(id, nickname);
    }

    // 두 번째 순회: 메시지 생성
    for (const r of record) {
        const [action, id] = r.split(' ');
        if (action !== 'Change') answer.push(`${userMap.get(id)}${messages[action]}`);
    }

    return answer;
}