const getMinMove = (charCode) => {
    return Math.min(charCode - 65, 91 - charCode);
}

const toNumberArray = (name) => {
    return [...name].map(v => v.charCodeAt())
}

function solution(name) {
    let answer = 0;
    const charCodes = toNumberArray(name);
    let move = charCodes.length - 1;
    
    for (let i = 0; i < charCodes.length; i++){
        answer += getMinMove(charCodes[i]);
        
        let nextIndex = i + 1;
        while (charCodes[nextIndex] === 65) nextIndex++;
        
        move = Math.min(move, i * 2 + (name.length - nextIndex), i + (name.length - nextIndex) * 2);
    }
    answer += move;
    return answer;
}