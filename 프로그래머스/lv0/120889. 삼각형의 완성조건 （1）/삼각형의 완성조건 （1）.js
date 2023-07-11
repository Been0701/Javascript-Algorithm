function solution(sides) {
    let max = 0;
    let sum = 0;
    for (item of sides) {
        max = item >= max ? item : max;  
        sum += item;
    }
    return max < sum - max ? 1 : 2;
}