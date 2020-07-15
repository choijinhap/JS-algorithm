function solution(n) {
    var answer = 0;
    for (let i = 2; i < n + 1; i++) {
        if (isPrime(i)) {
            answer++;
        }
    }
    return answer;
}

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (var i = 5; i * i < n + 1; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}