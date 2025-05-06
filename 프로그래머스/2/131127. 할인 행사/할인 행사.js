function solution(want, number, discount) {
  const n = want.length
  const discountInfo = {}
  let res = 0
  let start = 0
  let end = 0
  while (end < discount.length) {
    discountInfo[discount[end]] = (discountInfo[discount[end]] ?? 0) + 1
    // 모두 살 수 있는지 체크
    if (end - start + 1 === 10) {
      let flag = true
      for (let i = 0; i < n; i++) {
        if ((discountInfo[want[i]] || 0) < number[i]) {
          flag = false
          break //불가능
        }
      }
      if (flag) res++
      discountInfo[discount[start++]]--
    }
    end++
  }
  return res
}