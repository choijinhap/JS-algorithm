function solution(n) {
  var answer = [];
  answer = n
    .toString()
    .split('')
    .map((str) => parseInt(str))
    .reverse();
  return answer;
}
