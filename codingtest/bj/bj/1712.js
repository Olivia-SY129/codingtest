const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

// const input = "2100000000 9 10".trim().split(" ");

nums = input.map((num) => +num);

if (nums[1] >= nums[2]) {
  console.log(-1);
} else {
  console.log(Math.floor(nums[0] / (nums[2] - nums[1]) + 1));
}
