const alphabets = ['', 'A', 'E', 'I', 'O', 'U'];

const f = (alphabet) => alphabets.map(v => v + alphabet);

function solution(word) {
    return Array.from(new Set(alphabets.map(f).flat()
                    .map(f).flat()
                    .map(f).flat()
                    .map(f).flat())).sort().indexOf(word);   
    
    
}