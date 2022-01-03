/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answer = [];
  let p = 1;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    answer.push(p);
    p *= nums[i];
  }

  p = 1;

  for (let i = len - 1; i >= 0; i--) {
    answer[i] *= p;
    p *= nums[i];
  }

  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
