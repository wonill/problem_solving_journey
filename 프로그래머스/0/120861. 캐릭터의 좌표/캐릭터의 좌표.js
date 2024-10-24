const direction = {
    left: [-1, 0],
    right: [1, 0],
    up: [0, 1],
    down: [0, -1]
};

function solution(keyinput, board) {
    const [maxX, maxY] = board.map(v => Math.floor(v / 2));
    return keyinput.reduce((position, key) => {
        const [dx, dy] = direction[key];
        return [
            Math.max(-maxX, Math.min(maxX, position[0] + dx)),
            Math.max(-maxY, Math.min(maxY, position[1] + dy))
        ];
    }, [0, 0]);
}
