const fs = require("fs");
const stdin =
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `A`;

console.log(stdin.charCodeAt());
