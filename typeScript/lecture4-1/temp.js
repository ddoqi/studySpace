// 자바스크립트로 짠 방식
function add2(n1, n2) {
  // n2가 없는 경우에 n1만 반환하도록 작성
  if (!n2) return n1;
  return n1 + n2;
}

const a = add2(1, 2);
// js로 작성시 마지막의 파라미터 3은 무시가 된다.
const b = add2(1, 2, 3);
const c = add2(10);

// 🌼 <Rest Parameter> 🌼
// ES2015= ES6 에서 나온 것
// 뒤에 남는 요소들을 배열로 만들어준다.
function add4(n1, ...nums) {
  let totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return n1 + totalOfNums;
}

const result = add4(10, 20, 30, 40);
