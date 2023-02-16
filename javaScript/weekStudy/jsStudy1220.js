//  >> 구조분해할당
// const user = {
//   name: "hong",
//   age: 100,
//   email: "abc@google.com ",
// };

// // const { name, age, email, address = "기본값" } = user;
// // // user['name']
// // // 필요한 것들만 꺼내서 사용할 수 있다.
// // console.log(`${name}${age}${email}`);
// // console.log(address);
// // // 8번 라인에서처럼 값이 없다면 기본값을 따로 설정하는 걸 할 수 있다.

// const user1 = {
//   name: "abc",
//   age: 100,
//   address: "니똥",
// };

// // 이름을 객체 Key값이 아닌 다른 값으로 가져오고 싶을땐
// // 아래처럼 key값 : 바꾸고싶은 이름 -> 으로 해주면 된다.
// // const { name: a, age, address } = user1;
// // console.log(`${a}${age}${address}`);

// const arr = ["사과", "오렌지", "바나나", "체리"];
// // 인덱스1번째 것만 가져오고 싶으면??
// const [, b] = arr;
// console.log(b);

//  >> 전개연산자
const fruits = ["사과", "바나나", "체리", "수박", "참외"];
console.log(fruits);
// 출력값 : [ '사과', '바나나', '체리' ]
console.log(...fruits);
// 출력값 : 사과 바나나 체리
// ...(전개연산자)를 사용하면 이렇게 텍스트로 출력되는 걸 볼 수 있음

// function toObject(a, b, c) {
//   return {
//     a,
//     b,
//     c,
//   };
// }
// console.log(toObject(...fruits));
// // ...(fruits)
// // fruits[0],fruits[1],fruits[2] 와 같은 의미

// 매개변수 안에도 전개연산자를 사용할 수 있는데, 이때는 '나머지'의 의미가 된다.

function toObject(a, b, ...c) {
  return {
    a,
    b,
    c,
  };
}

console.log(toObject(...fruits));
// { a: '사과', b: '바나나', c: [ '체리', '수박', '참외' ] }

// 위 함수를 축약형으로 수정해보기

const toObject = (a, b, ...c) => ({
  a,
  b,
  c,
});
