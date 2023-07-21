function solution(array) {
    let index = 0;
    let max = 0;
    for (let i=0; i<array.length; i++) {
        max = array[i] > max ? array[i] : max;
        if (max === array[i]) index = i;
    }
    return [max, index];
}