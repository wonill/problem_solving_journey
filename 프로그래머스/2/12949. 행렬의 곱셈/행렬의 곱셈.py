def solution(arr1, arr2):
    answer = []
    for i in arr1:
        li_mul = []
        for idxI_atom in range(len(arr2[0])):
            atom = 0
            for j in range(len(arr2)):
                atom += i[j]*arr2[j][idxI_atom]
            li_mul.append(atom)
        answer.append(li_mul)
    return answer