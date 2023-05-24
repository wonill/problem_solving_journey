class Solution {
    public long solution(long price, long money, int count) {
        
        return price*count*(count+1)/2 > money ? price*count*(count+1)/2 - money : 0;
    }
}