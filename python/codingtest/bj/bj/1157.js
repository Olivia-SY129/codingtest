const input = require("fs").readFileSync("/dev/stdin").toString().toLowerCase();

const ans = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  ans[input.charCodeAt(i) - 97]++;
}

const max = Math.max(...ans);
const index = ans.indexOf(max);

let isEqual = false;

for (let j = 0; j < 26; j++) {
  if (ans[j] === max && index !== j) {
    isEqual = true;
    break;
  }
}

console.log(isEqual ? "?" : String.fromCharCode(index + 65));
