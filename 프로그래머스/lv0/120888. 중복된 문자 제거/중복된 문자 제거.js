function solution(my_string) {
    // 중복된 문자 나올 때 ''로 변환
    let strArr = my_string.split('');
    for (let i=1; i<strArr.length; i++) {
        for (let j=0; j<i; j++){
            if (strArr[j] === strArr[i]) {
                strArr[i] = '';
                break;
            }
        }
    }
    return strArr.join('');
}