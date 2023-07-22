function solution(n) {
    let hapseong = [];
    for (let i=1; i<=n; i++) {
        let yaksu = 0;
        for (let j=1; j<=i; j++) {
            if (i % j === 0) {
                yaksu++;
                if (yaksu >= 3) {
                    hapseong.push(i);
                    break;
                }
            }
        }
    }
    return hapseong.length;
}