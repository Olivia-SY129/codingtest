// const input = +require("fs").readFileSync("dev/stdin").toString().trim();

const input = 3;

const permutation = (arr, n) => {
  if (n === 1) return [arr];
  const result = [];
  arr.forEach((v) => {
    const rest = [
      ...arr.slice(0, arr.indexOf(v)),
      ...arr.slice(arr.indexOf(v) + 1),
    ];
    const permutations = permutation(rest, n - 1);

    const combined = permutations.map((p) => [v, ...p]);
    result.push(...combined);
  });
  return result;
};

const solution = (n) => {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  return permutation(arr, n)
    .map((v) => v.join(" "))
    .join("\n");
};

console.log(solution(input));
