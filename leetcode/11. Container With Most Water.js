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

//결국 면적은 두 개의 막대중에 짧은 막대에 의해 결정된다는 걸 이용
//O(n)
let maxArea2 = function (height) {
  let result = 0;
  let leftOffset = 0;
  let rightOffset = height.length - 1;
  while (leftOffset < rightOffset) {
    let area =
      Math.min(height[leftOffset], height[rightOffset]) *
      (rightOffset - leftOffset);
    result = area > result ? area : result;
    if (height[leftOffset] < height[rightOffset]) {
      leftOffset++;
    } else {
      rightOffset--;
    }
  }
  return result;
};
