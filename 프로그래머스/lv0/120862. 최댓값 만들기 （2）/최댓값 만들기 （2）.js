function solution(numbers) {
    let ascArr = numbers.sort((a,b) => a-b);
    let minusGop = ascArr[0] * ascArr[1];
    let plusGop = ascArr[ascArr.length-1] * ascArr[ascArr.length-2];
    return minusGop > plusGop ? minusGop : plusGop;
}