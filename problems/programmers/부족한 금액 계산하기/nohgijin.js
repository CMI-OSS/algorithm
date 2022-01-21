function solution(price, money, count) {
  var answer;

  for (let i = 1; i <= count; i++) {
    money -= price * i;
  }

  answer = money > 0 ? 0 : Math.abs(money);

  return answer;
}
