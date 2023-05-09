import java.util.*;
import java.util.Map.Entry;
class Solution {
    public int solution(int k, int[] tangerine) {
        int answer = 0;
   
        
        HashMap<Integer, Integer> tangerineMap = new HashMap<>();
        
        for(int x : tangerine) {
        	tangerineMap.put(x, tangerineMap.getOrDefault(x, 0) + 1);
        }
        
        
        List<Integer> tangerineList = new ArrayList<>();
        
        for(int x : tangerineMap.keySet()) {
        	tangerineList.add(tangerineMap.get(x));
        }
        
        tangerineList.sort(Collections.reverseOrder());
        
     
        int sum = 0;
        
        for(int x : tangerineList) {
        	sum += x;
        	answer++;
        	if(sum >= k) {
        		break;
        	}
        }
        
       
        
        return answer;
    }
}