//프로그래머스 코테연습 약수의 개수와 덧셈
let left = 13;
let right = 17;
//result 43

function solution(left, right) {
  var answer = 0;

  //left rigtht 까지 의 수들의 약수를 구한다.

  for (i = left; i <= right; i += 1) {
    let divisor = [];
    for (j = 1; j <= right; j += 1) {
      if (i % j === 0) {
        divisor.push(j);
        //j는 약수
      }
    }
    if (divisor.length % 2 === 0) {
      answer = answer + i;
    } else {
      answer = answer - i;
    }

    console.log(divisor);
    console.log(answer);
  }

  //각 수별로 약수의 개수를 구한다.
  //약수의 개수가 짝수면 더하고 홀수면 빼준다.
  //합을 반환한다.
  return answer;
}
solution(13, 17);
