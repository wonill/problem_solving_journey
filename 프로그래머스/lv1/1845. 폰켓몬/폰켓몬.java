import java.util.*;
class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        Set<Integer> numsSet = new HashSet<>();
        for(int num : nums){
            numsSet.add(num);    
        }
        Iterator<Integer> iter = numsSet.iterator();
        while(iter.hasNext()){
            iter.next();
            answer++;
        }
        
        
        return answer > nums.length/2 ? nums.length/2 : answer;
    }
}