function solution(my_string) {
    return [...my_string].map(i => i.toUpperCase() === i ? i.toLowerCase() : i.toUpperCase()).join('');
}