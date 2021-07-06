// const input = "The Curious Case of Benjamin Button".split("");
// const input = " Mazatneunde Wae Teullyeoyo".trim().split("");
// const input = "Teullinika Teullyeotzi ".trim().split("");

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

console.log(input[0] === "" ? 0 : input.length);
