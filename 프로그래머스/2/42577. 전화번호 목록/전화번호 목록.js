function solution(phone_book) {
    let phoneBook = Array.from({length: 21}, () => []);
    for (let i = 0; i < phone_book.length; i++) {
        phoneBook[phone_book[i].length].push(phone_book[i]);
    }
    for (let i = 20; i >= 1; i--){
        if (phoneBook[i].length){
            let set = new Set(phoneBook[i]);
            for (let j = i + 1; j <= 20; j++){
                if (phoneBook[j].length){
                    let prefixes = new Set(phoneBook[j].map(v => v.slice(0, i)));
                    let tmp = new Set(set);
                    for (let prefix of prefixes) tmp.add(prefix);
                    if (set.size + prefixes.size != tmp.size) return false;
                }
            }
        }
    }
    return true;
}