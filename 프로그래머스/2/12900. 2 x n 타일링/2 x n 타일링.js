function solution(n) {
    let dp = Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++){
        dp[i] = (dp[i - 1] + dp[i - 2]) % (1e9 + 7);
    }
    return dp[n];
}

// 1 1
// 2 11 00
// 3 111 100 001
// 4 1111 1001 0011 1100 0000