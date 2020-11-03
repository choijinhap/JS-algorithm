//brute force O(n2)
let maxArea = function (height) {
  let result = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let area = Math.min(height[i], height[j]) * (j - i);
      result = area > result ? area : result;
    }
  }
  return result;
};
