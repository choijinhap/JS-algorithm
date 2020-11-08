/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function (digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const backtrack = function (prevLetter, remaining_digits) {
    if (remaining_digits.length === 0) {
      ret.push(prevLetter);
    } else {
      for (let i = 0; i < map[remaining_digits[0]].length; i++) {
        let letter = prevLetter + map[remaining_digits[0]][i];
        backtrack(letter, remaining_digits.slice(1));
      }
    }
  };
  let ret = [];
  if (digits) {
    backtrack('', digits);
  }
  return ret;
};
