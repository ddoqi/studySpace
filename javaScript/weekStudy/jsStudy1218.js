// >> 배열(이어서)
// filter()
const fruits = ["Apple", "Banana", "Cherry"];
const numbers = [1, 2, 3, 4];

// const a = numbers.map((item) => item > 3);
// // 총 map은 4번 실행될거고, 결과값은 false,false,false,true
// // boolean형이 반환된다.
// const b = numbers.filter((item) => item > 3);
// console.log("b:", b);
// // 4가 담긴 배열이 생성된다.
// // 조건식이 false면 다음값으로 넘어가고, true인 결과값만 b에 들어간다.

// >> find 메소드
// const c = fruits.find((fruit) => {
//   //test도 메소드임->불린형으로 결과값을 반환하고
//   //test가 리턴한 값이 트루면 find가 해당 데이터를 c에 담는 것
//   // /^B/    ^ : 시작한다
//   return /^B/.test(fruit);
// });

// const d = fruits.findIndex((fruit) => {
//   return /^A/.test(fruit);
// });
// console.log("d", d);

//>>includes : 특정 데이터가 배열에 포함에 되어있는지를 확인하는 메소드
// const a = numbers.includes(3);
// const b = fruits.includes("abc");
// console.log(a, b);

// >> .push()  |   .unshift()
//  **주의 : 원본데이터 수정된다.

// const pushNum = [1, 2, 3, 4, 5];
// const pushFruits = ["사과", "오렌지", "배", "귤"];

// pushNum.push(6);
// console.log(pushNum);
// // 결과값 : [1,2,3,4,5,6]
// pushNum.unshift(0);
// console.log(pushNum);
// // 결과값 : [0,1,2,3,4,5,6]

// reverse
// //  **주의 : 원본데이터 수정된다.
// const revNum = [1, 2, 3, 4, 5];
// const revFruits = ["사과", "오렌지", "배", "귤"];

// revNum.reverse();
// revFruits.reverse();

// console.log("revNum : ", revNum);
// console.log("revFruits : ", revFruits);
// // *결과값
// // revNum :  [ 5, 4, 3, 2, 1 ]
// // revFruits :  [ '귤', '배', '오렌지', '사과'

//>> .spice()
// // **원본 데이터 수정주의!!
// numbers.splice(2, 1);
// // numbers.splice(2, 1) ??
// // (배열데이터의 인덱스값, 아이템을 몇 개를 지울지 개수)
// console.log(numbers);

// numbers.splice(2, 1, 55);
// // index의 2번째 자리에 아무것도 삭제하지말고, '55'를 추가해라
// console.log(numbers);
// // 결과값 : [ 1, 2, 55, 3, 4 ]

// >> Object 타입

// Object.assign()
// const userAge = {
//   name: "hong",
//   age: 100,
// };

// const userEmail = {
//   name: "hong",
//   email: "abc@gmail.com",
// };

// const target = Object.assign({}, userAge, userEmail);
// // userAge에 userEmail를 복사해서 붙여넣는다.
// console.log(target);
// // { name: 'hong', age: 100, email: 'abc@gmail.com' }
// console.log(userAge);
// // { name: 'hong', age: 100, email: 'abc@gmail.com' }
// console.log(target === userAge);
// // 결과값 : true

// const a = { k: 123 };
// const b = { k: 123 };
// console.log(a === b);
// // 결과값 : false

// const newObj = Object.assign({}, userAge);
// console.log(newObj);
// // 결과값 : newObe : { name: 'hong', age: 100 }
// console.log(newObj === userAge);
// // false

const user = {
  name: "hong",
  age: 100,
  email: "abc@google.com",
};

const keys = Object.keys(user);
// 결과값이 배열로 반환되넹
console.log("keys:", keys);
console.log(user["email"]);

const values = keys.map((key) => user[key]);
// keys : [name,age,email] 이고
// values에 user['name']의 값을 넣고, user['age']의 값을 넣고, user['email'] 값을 넣는 것
console.log("values:", values);
