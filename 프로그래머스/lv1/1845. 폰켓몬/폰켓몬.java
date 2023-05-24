import java.util.*;
class Solution {
    public int solution(int[] nums) {
         Set<Integer> numsSet = new HashSet<>();
        for(int num : nums){
            numsSet.add(num);    
        }
        return numsSet.size() > nums.length/2 ? nums.length/2 : numsSet.size();
    }
}