import java.util.*;
class Solution {
    public int[] solution(int[] numbers) {
        int[] answer = {};
        Set<Integer> plusSet = new HashSet<>();
        for(int i = 0; i < numbers.length - 1; i++){
            for(int j = i+1; j <numbers.length; j++){
                plusSet.add(numbers[i] + numbers[j]);
            }
        }
        answer = new int[plusSet.size()];
        Iterator<Integer> iter = plusSet.iterator();
        int idx = 0;
        while(iter.hasNext()){
            answer[idx++] = iter.next();
        }
        Arrays.sort(answer);
        return answer;
    }
}