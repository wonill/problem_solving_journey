import java.util.*;
class Solution {
    public int solution(int[] citations) {
         Arrays.sort(citations); // 배열을 오름차순으로 정렬

        int length = citations.length;
        for (int i = 0; i < length; i++) {
            int h = length - i; // 현재 논문의 인용 횟수 기준 H-Index

            // 현재 인용 횟수 기준으로 H-Index를 만족하는지 검사
            if (citations[i] >= h) {
                return h;
            }
        }

        return 0; // H-Index를 만족하는 값이 없는 경우
    }
}