function solution(enroll, referral, seller, amount) {
    let referralMap = new Map();
    let resultMap = new Map();
    
    referral.forEach((v, i) => referralMap.set(enroll[i], v));
    enroll.forEach(v => resultMap.set(v, 0));
    
    seller.forEach((receiver, i) => {
        let revenue = amount[i] * 100;
        while (receiver !== "-" && revenue > 0) {
            let distribute = Math.floor(revenue * 0.1);
            let keep = revenue - distribute;
            
            resultMap.set(receiver, resultMap.get(receiver) + keep);
            
            receiver = referralMap.get(receiver);
            revenue = distribute;
        }
    });
    
    return enroll.map(name => resultMap.get(name));
}