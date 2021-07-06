const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `11
    10987654321`
).split("\n");

const [n, digit] = stdin;
const arr = digit.trim().split("");
const sum = arr.reduce((pre, next) => parseInt(pre) + parseInt(next));
console.log(sum);
