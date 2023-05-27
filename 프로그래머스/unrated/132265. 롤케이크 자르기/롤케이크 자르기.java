import java.util.*;
class Solution {
    public int solution(int[] topping) {
        int answer = 0;
        Map<Integer, Integer> toppingMap = new HashMap<>();
        Set<Integer> myTopping = new HashSet<>();
        
        for(int toppingg : topping) {
        	toppingMap.put(toppingg, toppingMap.getOrDefault(toppingg, 0) + 1);
        }
        
        for(int i = 0; i < topping.length; i++) {
        	myTopping.add(topping[i]);
        	toppingMap.put(topping[i], toppingMap.get(topping[i]) - 1);
        	if(toppingMap.get(topping[i]) == 0) {
        		toppingMap.remove(topping[i]);
        	}
        	if(myTopping.size() == toppingMap.size()) {
        		answer++;
        	}
        }
        return answer;
    }
}