import java.util.*;
class Solution {
    public int solution(int[] picks, String[] minerals) {
        int answer = 0;
        int numOfEquip = picks[0] + picks[1] + picks[2];
        String[] mineralss = numOfEquip*5 >= minerals.length ? 
            minerals : Arrays.copyOfRange(minerals, 0, numOfEquip*5);
        int[][] graph = {{1,1,1},
        				 {5,1,1},
        				 {25,5,1}};
        Map<String, Integer> indexMap = new HashMap<>();
        indexMap.put("diamond", 0);
        indexMap.put("iron", 1);
        indexMap.put("stone", 2);
        Map<String, Integer> fatigueMap = new HashMap<>();
        fatigueMap.put("diamond", 25);
        fatigueMap.put("iron", 5);
        fatigueMap.put("stone", 1);
        int[] round = new int[mineralss.length%5 == 0? mineralss.length/5 : mineralss.length/5+1];
        
        for(int i = 0; i < mineralss.length; i++) {
        	round[i/5] += fatigueMap.get(mineralss[i]);
        }
        
        int[] order = new int[round.length];
        for(int i = 0; i < order.length; i++) {
        	order[i] = i;
        }
        for(int i = 0; i < round.length - 1; i++) {
        	for(int j = 0; j < round.length - i - 1; j++) {
        		if(round[j] < round[j+1]) {
        			int tmp = round[j];
        			round[j] = round[j+1];
        			round[j+1] = tmp;
        			
        			int tmp2 = order[j];
        			order[j] = order[j+1];
        			order[j+1] = tmp2;
        		}
        	}
        }
        
        int equip = -1;
        for(int i = 0; i < order.length; i++) {
        	for(int k = 0; k < picks.length; k++) {
        		if(picks[k] != 0) {
        			equip = k;
        			picks[k] -= 1;
        			System.out.println(Arrays.toString(picks));
        			break;
        		}
        	}
        	for(int j = order[i]*5; j < order[i]*5 +5; j++) {
        	if(equip == -1) return answer;
        		answer += graph[equip][indexMap.get(mineralss[j])];
        		if(j+1 == mineralss.length) {
        			break;
        		}
        	}
        	
        }
        return answer;
    }
}