function solution(id_pw, db) {
    let has_id = false;
    for (let [id, pw] of db){
        if (id === id_pw[0]) {
            has_id = true;
            if (pw === id_pw[1]) return "login";
        }
    }
    return has_id ? "wrong pw" : "fail";
}