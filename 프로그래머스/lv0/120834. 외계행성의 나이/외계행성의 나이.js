function solution(age) {
    var answer = [];
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    while (age / 10 > 0) {
        answer.push(alpha[age % 10]);
        age = Math.floor(age/10);
    }
    
    return answer.reverse().join('');
}