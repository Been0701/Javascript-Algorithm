function solution(my_string) {
    let regex = /[^0-9]/g;
    let nums = my_string.replace(regex, "");
    let numsArr = [...nums];
    let sum = 0;
    for (i of numsArr) {
        sum += Number(i);
    }
    return sum;
}