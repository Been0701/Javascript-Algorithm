function solution(num, k) {
    let numArr = num.toString().split('');
    let index = numArr.indexOf(k.toString());
    return index === -1 ? index : index+1 ;
}