function solution(num_list, n) {
    var answer = [];
    for (let i = 0; i <= num_list.length-n; i+=n) {
        let items = [];
        for (let j = 0; j < n; j++) {
            items.push(num_list[i+j]);
        }
        answer.push(items);
    }
    return answer;
}