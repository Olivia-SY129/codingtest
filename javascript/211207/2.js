const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;

    while (right > left) {
      const sum = nums[left] + nums[i] + nums[right];
      if (sum === 0) {
        result.push([nums[left], nums[i], nums[right]]);
        while (right > left && nums[left] === nums[left + 1]) left += 1;
        while (right > left && nums[right] === nums[right - 1]) right -= 1;

        left += 1;
        right -= 1;
      } else if (sum < 0) left += 1;
      else right -= 1;
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
