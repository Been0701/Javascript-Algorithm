function solution(numbers, direction) {
    // 앞에서 넣는건 unshift, 뒤에서 빼는건 pop : right
    // 앞에서 빼는건 shift, 뒤에서 넣는건 push : left
    if (direction === 'right') {
        numbers.unshift(numbers.pop())
    } else {
        numbers.push(numbers.shift())
    }
    return numbers;
}