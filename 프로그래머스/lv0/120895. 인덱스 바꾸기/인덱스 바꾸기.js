function solution(my_string, num1, num2) {
    let strArr = my_string.split('');
    let tmp = my_string[num1];
    strArr[num1] = strArr[num2];
    strArr[num2] = tmp;
    return strArr.join('');
}