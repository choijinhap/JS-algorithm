/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function (nums) {
  let ret = [];
  let set = new Set();
  const sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length - 2; i++) {
    let start = i + 1;
    let end = sortedNums.length - 1;
    while (start < end) {
      let result = sortedNums[i] + sortedNums[start] + sortedNums[end];
      if (result === 0) {
        if (
          !set.has(`${sortedNums[i]}${sortedNums[start]}${sortedNums[end]}`)
        ) {
          set.add(`${sortedNums[i]}${sortedNums[start]}${sortedNums[end]}`);
          ret.push([sortedNums[i], sortedNums[start], sortedNums[end]]);
        }
        start++;
        end--;
      } else if (result > 0) {
        end--;
      } else {
        start++;
      }
    }
  }
  //   console.log(ret);
  return ret;
};
