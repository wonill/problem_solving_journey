class Solution {
    public int[] solution(int n, long left, long right) {
        int[] answer = new int[(int) (right-left+1)];
		
		for(long i = left; i <= right; i++) {
			long base_number = i%n+1;
			long number_to_add = i/n - i%n < 0 ? 0 : i/n - i%n;
			
			answer[(int) (i-left)] = (int) (base_number + number_to_add);
		}

        return answer;
    }
}