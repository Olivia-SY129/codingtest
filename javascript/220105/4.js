/**
 * @param {number[]} temp
 * @return {number[]}
 */
var dailyTemperatures = function (temp) {
  const result = Array.from({ length: temp.length }).fill(0);
  const stack = [];

  for (let i = 0; i < temp.length; i++) {
    while (stack && temp[i] > temp[stack[stack.length - 1]]) {
      const popped = stack.pop();
      result[popped] = i - popped;
    }
    stack.push(i);
  }

  return result;
};
