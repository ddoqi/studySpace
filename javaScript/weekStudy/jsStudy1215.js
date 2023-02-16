// >> 생성자 함수
// object 타입에 firstName이나 lastName은 '속성' 이지만,
// 프로퍼티에 getFullName처럼 함수가 할당되면, 더 이상 '속성'이라고 부르지 않고
// '메소드'라고 부른다.firstName이나
// '속성'과 '메소드'를 합쳐서 => '멤버'라고도 부름

// const obj1 = {
//   firstName: "hong",
//   lastName: "kindong",
//   getFullName: function () {
//     // 여기서 this가 지칭하는 것은 이 this가 소속되어있는 '함수'가 실행되는 그 객체데이터(obj1)를 지칭한다.
//     // 여기서 this는 obj1이다.
//     return `풀네임은 ${this.firstName} ${this.lastName}입니다. `;
//   },
// };

// console.log( obj1.getFullName());

// function안에서 this는 this가 속해있는 해당 함수를 가리킨다했나?
// 여기서 this는 생성자함수(new)를 통해서 할당된 그 앞의 객체 a,b,c를 지칭하게 된다.

function user(first, last) {
  this.firstName = first;
  this.lastName = last;
}

user.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// 이렇게 new를 사용한 함수를 '생성자 함수' 라고 한다.
// 하나의 객체 데이터가 생성되는 것
// a,b,c => 인스턴스
const a = new user("f1", "l1");
const b = new user("f2", "l2");
const c = new user("f3", "l3");

console.log("a : ", a.getFullName());
console.log("b : ", b);
console.log("c : ", c);
