const switchToSeconds = (time) => {
    const [minutes, seconds] = time.split(':').map(Number);
    return minutes * 60 + seconds;
}

const switchToTimeString = (seconds) => {
    return Math.floor(seconds / 60).toString().padStart(2, '0') + ':' + (seconds % 60).toString().padStart(2, '0')
}

function solution(video_len, pos, op_start, op_end, commands) {
    video_len = switchToSeconds(video_len);
    pos = switchToSeconds(pos);
    op_start = switchToSeconds(op_start);
    op_end = switchToSeconds(op_end);
    commands.forEach((cmd) => {
        if (pos >= op_start && pos <= op_end) pos = op_end;
        pos += cmd === 'next' ? 10 : -10;
        if (pos < 0) pos = 0;
        if (pos > video_len) pos = video_len;
        if (pos >= op_start && pos <= op_end) pos = op_end;
    })
    return switchToTimeString(pos);
}