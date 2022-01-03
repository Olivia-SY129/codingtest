/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height.length) return 0;

  let left = 0;
  let right = height.length - 1;
  let volume = 0;

  let maxLeft = height[left];
  let maxRight = height[right];

  while (left < right) {
    maxLeft = Math.max(height[left], maxLeft);
    maxRight = Math.max(height[right], maxRight);

    if (maxLeft <= maxRight) {
      volume += maxLeft - height[left];
      left++;
    } else {
      volume += maxRight - height[right];
      right--;
    }
  }

  return volume;
};
