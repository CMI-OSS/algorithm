function solution(sizes) {
  var answer = 0;
  const large = [];
  const small = [];

  for (let i = 0; i < sizes.length; i++) {
    large.push(Math.max(sizes[i][0], sizes[i][1]));
    small.push(Math.min(sizes[i][0], sizes[i][1]));
  }

  answer = Math.max(...large) * Math.max(...small);

  return answer;
}
