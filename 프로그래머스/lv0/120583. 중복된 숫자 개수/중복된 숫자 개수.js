function solution(array, n) {
    var answer = 0;
    for(item of array) {
        item === n ? answer++ : null;
    }
    return answer;
}