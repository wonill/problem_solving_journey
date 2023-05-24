import java.util.*;
class Solution {
    public int solution(int[] ingredient) {
        int answer = 0;
        Stack<Integer> ingredients = new Stack<>();
		
		for(int i = 0; i < ingredient.length; i++) {
			ingredients.push(ingredient[i]);
			if(ingredients.size() >= 4 && 
					ingredients.get(ingredients.size()-1)==1 && 
					ingredients.get(ingredients.size()-2)==3 && 
					ingredients.get(ingredients.size()-3)==2 && 
					ingredients.get(ingredients.size()-4)==1) {
				ingredients.pop();ingredients.pop();ingredients.pop();ingredients.pop();
				answer++;
			}
		}
        return answer;
    }
}