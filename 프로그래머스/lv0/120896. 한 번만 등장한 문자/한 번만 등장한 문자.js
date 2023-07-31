function solution(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++){
        let sArr = s.split('');
        let tmp = sArr[i];
        sArr.splice(i,1);
        if (sArr.indexOf(tmp) === -1) arr.push(tmp); 
    }
    return arr.sort().join('');
}