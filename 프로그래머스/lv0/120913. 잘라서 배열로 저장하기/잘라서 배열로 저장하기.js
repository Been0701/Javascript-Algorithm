function solution(my_str, n) {
    var answer = [];
    var cnt = 0;

    for(let i=0; i<Math.ceil(my_str.length/n); i++){
        answer.push(my_str.substr(cnt,n));
        cnt += n;
    }

    return answer;
}