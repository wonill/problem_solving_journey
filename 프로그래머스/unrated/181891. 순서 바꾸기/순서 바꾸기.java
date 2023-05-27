import java.util.*;
class Solution {
    public int[] solution(int[] num_list, int n) {
        int[] answer = Arrays.copyOfRange(num_list, 0, num_list.length);
        for(int i = 0; i < num_list.length; i++){
            answer[(i + num_list.length - n) % num_list.length] = num_list[i];
        }
        
        return answer;
    }
}