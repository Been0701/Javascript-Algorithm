function solution(my_string, letter) {
    let strArr = my_string.split('');
    return strArr.filter((item) => item !== letter).join('');
}