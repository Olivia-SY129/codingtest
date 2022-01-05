/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const charNum = {};
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    charNum[s[i]] = (charNum[s[i]] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    charNum[s[i]] -= 1;
    if (stack.includes(s[i])) continue;
    while (
      stack &&
      s[i] < stack[stack.length - 1] &&
      charNum[stack[stack.length - 1]] > 0
    ) {
      stack.pop();
    }
    stack.push(s[i]);
  }

  return stack.join("");
};
