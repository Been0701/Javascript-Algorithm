function solution(array, n) {
    let closestValue = array[0];
    let minDiff = Math.abs(array[0]-n);
    
    for (let i = 1; i < array.length; i++) {
        let diff = Math.abs(array[i]-n);
        if (diff < minDiff) {
            minDiff = diff;
            closestValue = array[i];
        } else if (diff === minDiff && array[i] < closestValue)
            closestValue = array[i];
    }
    return closestValue;
}