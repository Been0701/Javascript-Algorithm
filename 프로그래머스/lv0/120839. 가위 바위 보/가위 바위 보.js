function solution(rsp) {
    return [...rsp].map((item) => item == 2 ? 0 : item == 0 ? 5 : 2).join('');
}