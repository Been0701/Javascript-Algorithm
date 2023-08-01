function solution(emergency) {
    let copy = [...emergency];
    // 내림차순으로 바꾼 다음에 원래 배열과 index를 이용해서 매칭시켜야 함
    let sorted = emergency.sort((a,b) => b-a);
    return copy.map((item) => sorted.indexOf(item)+1);
}