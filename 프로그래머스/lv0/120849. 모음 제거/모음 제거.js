function solution(my_string) {
    let str = my_string.match(/[^aeiou]/gi);
    return str === null ? '' : str.join('');
}