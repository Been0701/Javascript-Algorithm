function solution(my_string, n) {
    let result = my_string.split('');
    let newArr = [];
    for (let i of result) {
       for (let j=0; j<n; j++){
         newArr.push(i);
       }
   }
    return newArr.join('');
}