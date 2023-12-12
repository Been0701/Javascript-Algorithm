function solution(n) {
    var arr = [];
    if (n !== 0) {
    for (let i=1; i<=n; i++) {
        if (n%i === 0) {
            arr.push(i)
        }
    }
    return arr.reduce((acc, curr) => acc+curr);
    } else return 0;
}