class Solution {
    public long solution(long n) {
        double sqrt = Math.sqrt(n);
		return (long) (sqrt == (int)(sqrt) ? Math.pow(sqrt+1, 2) : -1);
    }
}