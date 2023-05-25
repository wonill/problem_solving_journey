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
        String max_index = "";
        int max_score = -1;
        for(int i = 0; i< people.length; i++){
            if(people[i] > max_score){
                max_score = people[i];
                max_index = "" + (i+1);
            } else if(people[i] == max_score){
                max_index += " " + (i+1);
            }
        }
        String[] arr = max_index.split(" ");
        answer = new int[arr.length];
        for(int i = 0; i < answer.length; i++){
            answer[i] = Integer.parseInt(arr[i]);
        }
        Arrays.sort(answer);
        return answer;
    }
}