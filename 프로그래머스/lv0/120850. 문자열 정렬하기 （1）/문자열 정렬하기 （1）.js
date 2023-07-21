function solution(my_string) {
    return my_string.split('').filter(item => /\d/.test(item))
                              .map(item => parseInt(item))
                              .sort((a,b) => a - b);
}