/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};

  nums.forEach((num, i) => {
    map[num] = i;
  });

  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined && i !== map[target - nums[i]]) {
      return [i, map[target - nums[i]]];
    }
  }
};
