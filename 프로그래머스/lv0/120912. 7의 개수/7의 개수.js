function solution(array) {
    let sevenArr = array.join('').match(/7/g);
    return sevenArr ? sevenArr.length : 0
}