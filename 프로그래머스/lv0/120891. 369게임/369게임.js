function solution(order) {
    // 3의 배수가 아닌 정확히 3 or 6 or 9인 경우에만 박수
    var answer = 0;
    let numbers = String(order).split('');
    for (i of numbers) {
        if (i == 3 || i == 6 || i== 9) answer++;
    }
    return answer;
}