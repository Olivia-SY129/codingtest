const solution = (s) => {
  let minLen = s.length;

  for (let cut = 1; cut <= s.length / 2; cut++) {
    const regExp = new RegExp(`.{${cut}}`, "g");
    const arr = s.match(regExp);
    if (arr.join("").length < s.length) {
      arr.push(s.slice(arr.join("").length));
      // console.log(arr.join(""));
    }
    // console.log("arr", arr);
    let newStr = "";
    let chunk = "";
    let repeat = 1;
    arr.forEach((val, i) => {
      if (i === 0) chunk = val;
      else if (i !== 0 && val === arr[i - 1] && i !== arr.length - 1) {
        repeat += 1;
      } else if (val === arr[i - 1] && i === arr.length - 1) {
        repeat += 1;
        newStr += chunk + (repeat === 1 ? "" : repeat);
      } else if (val !== arr[i - 1] && i === arr.length - 1) {
        newStr += chunk + (repeat === 1 ? "" : repeat);
        chunk = val;
        newStr += chunk;
      } else {
        newStr += chunk + (repeat === 1 ? "" : repeat);
        repeat = 1;
        chunk = val;
      }
    });
    minLen = Math.min(minLen, newStr.length);
    // console.log(newStr);
  }

  return minLen;
};

console.log(solution("xababcdcdababcdcd"));
