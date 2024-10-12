function solution(s){
    const pReg = /p/gi;
    const yReg = /y/gi;
    const pMatch = s.match(pReg);
    const pCount = pMatch ? pMatch.length : 0;
    const yMatch = s.match(yReg);
    const yCount = yMatch ? yMatch.length : 0;

    return pCount === yCount;
}