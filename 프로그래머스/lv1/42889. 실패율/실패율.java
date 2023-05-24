import java.util.*;
class Solution {
    public int[] solution(int N, int[] stages) {
        int[] answer = new int[N];
		 List<Integer> stageList = new ArrayList<>();
		 for(int stage : stages) {
			 stageList.add(stage);
		 }
		 Double[] rates = new Double[N];
		 
		 for(int i = 1; i <= N; i++) {
			 double mom = 0;
			 for(int j = 0; j < stages.length; j++) {
				 if(stages[j] >= i) mom++;
			 }
			 rates[i-1] = mom == 0? 0 :Collections.frequency(stageList, i)/mom;
		 }

		 List<Double> rateList = new ArrayList<>();
		 for(Double rate : rates) {
			 rateList.add(rate);
		 }
		 Collections.sort(rateList);
		 Collections.reverse(rateList);
		 List<Integer> ansList = new ArrayList<>();
		 for(int i = 0; i < N; i++) {
			 for(int j = 0; j < N; j++) {
				 if(rateList.get(i).equals(rates[j])) {
					if(ansList.contains(j+1)) {
						continue;
					}
					ansList.add(j+1); 
				 }
			 }
		 }
		 for(int i = 0; i < N; i++) {
			 answer[i] = ansList.get(i);
		 }
        return answer;
    }
}