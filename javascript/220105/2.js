/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2) return false;

  const stack = [];
  const pair = { "(": ")", "{": "}", "[": "]" };

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];
    if (/\(|\[|{/.test(bracket)) {
      stack.push(bracket);
    } else {
      const popped = stack.pop();
      if (pair[popped] !== bracket) return false;
    }
  }

  return true;
};
