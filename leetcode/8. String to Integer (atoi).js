/**
 * @param {string} s
 * @return {number}
 */
const MAX_INTEGER = Math.pow(2, 31) - 1;
const MIN_INTEGER = -Math.pow(2, 31);

let myAtoi = function (s) {
  let result = 0;
  let sign = 1;
  let offset = 0;

  //whitespace 제거
  let str = s.trim();
  if (str.length <= 0) return 0;

  //첫글자에 부호 있는지 확인 , 있으면 sign할당 및 offset 증가
  if (str.charAt(offset) === '+' || str.charAt(offset) === '-') {
    sign = str.charAt(offset) === '+' ? 1 : -1;
    offset++;
  }

  //앞에서 부터 글자가 숫자인지 확인
  while (
    offset < str.length &&
    str.charAt(offset) >= '0' &&
    str.charAt(offset) <= '9'
  ) {
    //overflow,underflow 확인 필요
    if (
      result > MAX_INTEGER / 10 ||
      (result === parseInt(MAX_INTEGER / 10) &&
        str.charAt(offset) > MAX_INTEGER % 10)
    ) {
      return sign === 1 ? MAX_INTEGER : MIN_INTEGER;
    }

    //앞에서 부터 확인해서 지금 확인하는 글자가 숫자면 그 전까지의 결과에 10을 곱해주고 지금 글자 넣어주면됨.
    result = result * 10 + parseInt(str.charAt(offset));
    offset++;
  }
  return sign * result;
};
