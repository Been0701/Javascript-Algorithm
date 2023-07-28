function solution(n) {
    var answer = 1;
    for (let num = 1; num <= n; num++) {
        answer *= num;
        if (n < answer) return num-1;
        else if (n == answer) return num;
    }
}