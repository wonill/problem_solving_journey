function solution(record) {
    const userMap = new Map();
    const actions = [];
    const messages = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    };

    // 첫 번째 순회: 최종 닉네임 저장
    for (const r of record) {
        const [action, uid, nickname] = r.split(' ');
        if (action !== 'Leave') {
            userMap.set(uid, nickname);
        }
    }

    // 두 번째 순회: 메시지 생성
    for (const r of record) {
        const [action, uid] = r.split(' ');
        if (action !== 'Change') {
            actions.push(`${userMap.get(uid)}${messages[action]}`);
        }
    }

    return actions;
}