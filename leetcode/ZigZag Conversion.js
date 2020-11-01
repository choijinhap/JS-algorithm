/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function (s, numRows) {
  if (numRows === 1) return s;
  let isUp = true;
  let result = new Array(numRows);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array();
  }
  result[0].push(s.charAt(0));
  let pos = 1;
  for (let i = 1; i < s.length; i++) {
    result[pos].push(s.charAt(i));
    if (i % (numRows - 1) === 0) {
      isUp = !isUp;
    }
    pos = isUp ? pos + 1 : pos - 1;
  }
  let ret = '';
  result.forEach((a) => {
    ret += a.join('');
  });
  return ret;
};
console.log(convert('ab', 1));
