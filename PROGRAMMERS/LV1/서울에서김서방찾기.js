function solution(seoul) {
    let answer = '';
    let count = -1;
    answer = seoul.find(val => {
        count++;
        return val === 'Kim'
    })
    answer = '김서방은 ' + count + '에 있다';
    return answer;
}

//better solution with indexOf
function betterSolution(seoul) {
    return '김서방은 ' + seoul.indexOf('Kim') + '에 있다';
}
