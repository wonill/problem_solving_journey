import java.util.*;
class Solution {
    public int[] solution(int[] arr, int divisor) {
        int[] answer = {};
        
        List<Integer> ansList = new ArrayList<>();
        
        for(int num : arr){
            if(num % divisor == 0){
                ansList.add(num);
            }
        }
        if(ansList.size() == 0){
            return new int[]{-1};
        }
        
        Collections.sort(ansList);
        
        answer = new int[ansList.size()];
        for(int i = 0; i < ansList.size(); i++){
            answer[i] = ansList.get(i);
        }
        
        return answer;
    }
}