// const input = "ljes=njak";

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function ans(input) {
  for (let char of croatia) {
    input = input.split(char).join("A");
  }
  return input.length;
}
console.log(ans(input));
