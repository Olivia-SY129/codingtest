// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map((x) => +x);

const input = "100 99 1000000000".split(" ").map((x) => +x);

const [a, b, v] = input;
let remained = v;

const cnt = Math.ceil((remained - a) / (a - b)) + 1;

console.log(cnt);
