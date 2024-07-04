function solution(n) {
    let dp = Array(n + 1);
    for (let i = 1; i <= n; i++){
        if (i <= 2) {
            dp[i] = i;
            continue;
        }
        dp[i] = dp[i - 1] % 1234567 + dp[i - 2] % 1234567;
    }
    return dp[n] % 1234567;
}