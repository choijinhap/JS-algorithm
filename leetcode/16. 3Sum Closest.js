/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function (nums, target) {
  const sortedNums = nums.sort((a, b) => a - b);
  //const set = new Set(sortedNums);
  //const uniqueNums = nums.sort((a, b) => a - b);
  //Array.from(set);
  let curRet = Infinity;
  for (let i = 0; i < sortedNums.length - 2; i++) {
    let start = i + 1;
    let end = sortedNums.length - 1;
    while (start < end) {
      let sum = sortedNums[i] + sortedNums[start] + sortedNums[end];
      let diff = sum - target;
      if (Math.abs(diff) < Math.abs(curRet - target)) {
        curRet = sum;
      }

      if (diff < 0) {
        start++;
      } else if (diff > 0) {
        end--;
      } else {
        console.log(sum);
        return sum;
      }
    }
  }
  console.log(curRet);

  return curRet;
};
