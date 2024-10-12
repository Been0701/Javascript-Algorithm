function solution(n)
{
    // 345 / 10 = 34
    // 345 % 10 = 5
    // 34 / 10 = 3
    // 34 % 10 = 4
    // 3 / 10 = 0
    // 3 % 10 = 3
    // 0
    let answer = 0;
    while ( n !== 0) {
        answer += n % 10;
        n = Math.floor(n / 10);
    }
    return answer;
}