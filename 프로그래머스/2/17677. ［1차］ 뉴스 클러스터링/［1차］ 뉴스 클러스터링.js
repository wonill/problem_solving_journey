function J(arr1, arr2){
    const union = [];
    const intersection = [];
    
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] === arr2[j]){
            union.push(arr1[i]);
            intersection.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] > arr2[j]){
            union.push(arr2[j++]);
        } else if (arr1[i] < arr2[j]){
            union.push(arr1[i++]);
        }       
    }
    
    while (i < arr1.length) {
        union.push(arr1[i++])
    }
    
    while (j < arr2.length){
        union.push(arr2[j++]);
    }
    
    if (union.length === 0 && intersection.length === 0) return 1;
    
    return intersection.length / union.length;
}

function toMultiSet(str){
    const multiset = [];
    str = str.toUpperCase();
    
    for (let i = 0; i < str.length - 1; i++){
        if (str[i].charCodeAt() < 65 || str[i].charCodeAt() > 90){
            continue;
        }
        if (str[i + 1].charCodeAt() < 65 || str[i + 1].charCodeAt() > 90){
            continue;
        }
        multiset.push(str[i] + str[i + 1]);
    }
    return multiset.sort((a, b) => a.localeCompare(b));
}

function solution(str1, str2) {
    const multiset1= toMultiSet(str1);
    const multiset2= toMultiSet(str2);
    const similarity = J(multiset1, multiset2);
    return Math.floor(similarity * 65536);
}