function solution(progresses, speeds) {
  let answer = [];
  let finished = 0;
  let curProgresses = [...progresses];
  let i = 0;
  while (finished !== progresses.length) {
    curProgresses = curProgresses.map((value, index) => {
      return value + speeds[index];
    });
    if (curProgresses[finished] >= 100) {
      finished = curProgresses.findIndex((value) => value < 100);
      finished = finished === -1 ? progresses.length : finished;
      answer.push(finished-sum(answer));
    }
  }
  return answer;
}
function sum(arr){
    return arr.reduce((p,v,i,a)=>p+v,0);
}
