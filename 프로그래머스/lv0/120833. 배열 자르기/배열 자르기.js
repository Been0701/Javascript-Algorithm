function solution(numbers, num1, num2) {
    let newArr = [];
    for (i=0; i<numbers.length; i++){
        if (num1 <= i && i <= num2){
        newArr.push(numbers[i])
        }
    }
    return newArr;
}