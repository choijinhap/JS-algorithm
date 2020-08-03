function solution(arr) {
  var answer = [];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  answer = arr.filter((num) => num !== min);
  if (answer.length === 0) answer = [-1];
  return answer;
}
