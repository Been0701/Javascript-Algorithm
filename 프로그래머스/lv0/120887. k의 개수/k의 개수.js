function solution(i, j, k) {
    var answer = 0;
    for (let num = i; num <= j; num++) {
        let arr = num.toString().split('');
        for (let j of arr) {
            if (j.includes(k+'')) answer++
        }
    }
    return answer;
}