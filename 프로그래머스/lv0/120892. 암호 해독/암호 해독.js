function solution(cipher, code) {
    var answer = '';
    // code의 배수로 구한 인덱스의 값에서 인덱스 -1 한 값만 필터링
    let newArr = cipher.split('');
    return newArr.filter((item, index) => (index+1) % code === 0 ? newArr[index] : false).join('');
}