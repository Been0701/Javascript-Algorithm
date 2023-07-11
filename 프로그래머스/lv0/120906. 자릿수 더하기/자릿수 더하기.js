function solution(n) {
    let arr = String(n).split('');
    let sum = 0;
    for (item of arr) {
        item = parseInt(item);
        sum += item;
    }
    return sum;
}