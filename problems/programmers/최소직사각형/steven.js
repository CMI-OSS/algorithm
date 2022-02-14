function solution(sizes) {
  let max = Math.max(...sizes.flat());
  let tmp = [];
  sizes.forEach((el) => (el[0] >= el[1] ? tmp.push(el[1]) : tmp.push(el[0])));

  let min = Math.max(...tmp);

  return max * min;
}
