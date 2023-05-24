import java.util.*;
class Solution {
    public int[] solution(int k, int[] score) {
        int[] answer = new int[score.length];
        List<Integer> scoreList = new ArrayList<>();
        for(int i = 0; i < score.length; i++){
            scoreList.add(score[i]);
            if(i >= k){
                scoreList.remove(Collections.min(scoreList));
            }
            answer[i] = Collections.min(scoreList);
        }
        return answer;
    }
}