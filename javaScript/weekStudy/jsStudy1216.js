// // >> 프로토타입
// // 이 prototype을 우리는 알게모르게 계속 쓰고 있었음

// const whatProto = [1,2,3];
// console.log('whatProto',whatProto)
// // 이거 브라우저 콘솔창에 찍어보셈 , proto나옴
////-------------------------------------------
// // 생성자 함수일때는 첫번째 단어를 '대문자'로 써주는 것이 관행
// // User라고 되어있는것만 보고도 new랑 같이쓰는 생성자함수라는걸 알아차릴수있음
// function User(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }

//   user.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };

//   const a = new user("f1", "l1");
//   const b = new user("f2", "l2");
//   const c = new user("f3", "l3");

//   console.log("a : ", a.getFullName());
//   console.log("b : ", b);
//   console.log("c : ", c);

////-------------------------------------------

// // >> this
// // 1. 일반 함수는 '호출 위치'에 따라 this 정의
// // 2. 화살표 함수는 자신이 선언된 '함수 범위'에서 this를 정의

// const thisFun = {
//   name: "hong",
//   normal: function () {
//     console.log("normal의 this :", this.name);
//   },
//   arrow: () => {
//     console.log("arrow의 this :", this.name);
//   },
// };

// // 일반함수는 자기가 호출되는 위치에서 this가 정의된다.
// // 일반함수가 그냥 선언되어 있을때는 아직 this가 정해지지 않은 상태임
// // 이 normal함수는 thisFun 안에서 실행이 되는데, 44번 라인에서 '호출'이 될 때
// // 자기의 앞에있는 thisFun가 this로 맵핑되는 것
// thisFun.normal();
// // 화살표 함수는??
// // 자신이 '선언'된 '함수' 범위에서 this가 정해지는데, (37번 라인) this가 없으니 undefined가 출력
// thisFun.arrow();

// const detailFun = {
//   name: "detailName",
//   normal: thisFun.normal,
//   arrow: thisFun.arrow,
// };

// // 여기서 thisFun.normal은 괄호()로 '실행'이 되고 있는게 아니라
// // 단순히 '할당'이 되는 것

// // 일반함수 : 자기가 '호출'될 때 앞에 detailFun가 있으니 detailFun의 name이 출력되고
// detailFun.normal();
// // 화살표 함수 : 화살표 함수는 자기가 '선언'된 곳 37번라인에서 this를 찾는데 여전히 모르니 undefined 출력
// detailFun.arrow();

////-------------------------------------------

// function User(name) {
//   this.name = name;
// }

// User.prototype.normal = function () {
//   console.log("nomal의 this.name:", this.name);
// };
// User.prototype.arrow = () => {
//   console.log("arrow의 this.name:", this.name);
// };

// const test = new User("testName");

// // 일반함수는 자기가 호출되는 때에 this가 정해지니
// // testName이 될 것 같고
// test.normal();
// // 화살표함수는 자기가 선언된 곳(=만들어진 곳)에서니 아무것도 할당되지 않을 것 같음
// test.arrow();
////-------------------------------------------

// const timer = {
//   name: "timer !!!",
//   tiemeout: function () {
//     // setTimeout(함수, 시간)
//     setTimeout(() => {
//       console.log(this.name);
//     }, 2000);
//   },
// };

// timer.tiemeout();
// this.name이 undefined가 나온 이유?
// this가 속해있는 function이 호출되는 곳은 setTimeout이자농

// 그렇다면, this.name을 timer의 name으로 넣고싶다면??
// timer의 timeout이라는 함수 내에서 setTimeout의 콜백함수로 일반함수를 만들것이 아니라
// 화살표함수르 고쳐주기
// ***** 아래는 화살표함수로 고치기전 ******
// const timer = {
//     name: "timer !!!",
//     tiemeout: function () {
//       // setTimeout(함수, 시간)
//       setTimeout(function () {
//         console.log(this.name);
//       }, 2000);
//     },
//   };

// // -----------------------------
// >> ES6 Classes

// const thisFun = {
//   name: "hong",
//   normal: function () {
//     console.log("normal의 this :", this.name);
//   },
//   arrow: () => {
//     console.log("arrow의 this :", this.name);
//   },
// };

// normal: function () {
//     console.log("normal의 this :", this.name);
//   },

// 이 부분에서 < : function > 을 지워도 똑같음 (아래처럼 됌)

// normal () {
//     console.log("normal의 this :", this.name);
//   },

// ----------------------------------
// >> ES6에서 도입된 방법은 이렇게 사용하는게 아니라.

// function User(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }

// class User {
//   constructor(x, y) {
//     this.firstName = x;
//     this.lastName = y;
//   }
// //  바로 이렇게 프로토타입을 사용하지 않고,
// // 프로토타입으로 만든 메소드가 정의가 된 것
//   getFullName(){
//     return `${firstName} ${}`
//   }
// }

// constructor : function () { }
// // 이게 : function이 생략되서, constructor  ( ) { } 이 된거라고 보면 됌

////--------------------------------------
//>> 상속(확장)

class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}

const myVehicle = new Vehicle("운송수단", "2개");
console.log("myVehicle :", myVehicle);

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    // super : extends시킨 Vehicle를 의미하고
    // super자리에서 Vehicle이 실행된다고 이해하면 된다.
    super(name, wheel);
  }
}

class Car extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
    this.license = license;
  }
}
