import java.util.*;
class Solution {
    public int[] solution(int[] answers) {
        int[] answer = {};
        int[] people = {0, 0, 0};
        int[] rule = {1, 3, 4, 5};
        int[] rule2 = {3, 1, 2, 4, 5};
        for(int i = 0; i < answers.length; i++){
            if(answers[i] == i%5+1){
                people[0]++;
            } 
            if(i%2==0 && answers[i] == 2){
                people[1]++;
            } else if(i%2==1 && answers[i] == rule[i/2%4]){
                people[1]++;
            }
            if(answers[i] == rule2[i/2%5]){
                people[2]++;
            }
        }
        List<Integer> max_index = new ArrayList<>();
        int max_score = Math.max(Math.max(people[0], people[1]), people[2]);
        for(int i = 0; i < people.length; i++) {
        	if(people[i] == max_score) {
        		max_index.add(i+1);
        	}
        }
        Collections.sort(max_index);
        answer = new int[max_index.size()];
        for(int i = 0; i < max_index.size(); i++) {
        	answer[i] = max_index.get(i);
        }
        return answer;
    }
}