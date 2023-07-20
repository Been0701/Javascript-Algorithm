function solution(balls, share) {
    let bunja = 1;
    let bunmo = 1;
    for (let i=balls; i>balls-share; i--) {
         bunja *= i;
    }
    for (let i=share; i>0; i--){
        bunmo *= i;
    }
    return bunja / bunmo;
}