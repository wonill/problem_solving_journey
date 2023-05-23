class Solution {
    public boolean solution(int x) {
        boolean answer = true;
        int sum = 0;
        for(char num : String.valueOf(x).toCharArray()){
            sum += num - '0';
        }
        return x % sum == 0;
    }
}