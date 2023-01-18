"use strict";
// // 🌸 Rest파라메터 🌸
// // ->다른 파라메터 맨 뒤에 써야한다.
// function 함수(...rest파라메터: number[]) {
//   //   console.log("...rest파라메터", rest파라메터);
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// 함수(1, 2, 3, 4, 5, 5, 6);
// //⭐️ ...를 array나 object에 쓰면?
// // '괄호를 벗겨주세요' 라는 의미
// let arr = [1, 2, 3];
// let arr2 = [4, 5];
// let arr3 = [...arr, ...arr2];
// // 🌸 Destructuring 🌸
// let 구조분해할당 = ["안녕", 100];
// let [변수1, 변수2] = 구조분해할당;
// // object은 key값을 맞춰주기!
// // let {student,age} 를 풀어쓰면 아래와 같음
// let { student: student, age: age } = { student: true, age: 20 };
// let 옵줵 = { student: true, age: 20 };
// // ⭐️ 처음부터 함수의 파라메터 자리에 '옵줵'을 디스트럭쳐링해서 갖다쓰고싶으면??
// // 원본) function 함수디스트럭쳐링(a, b) {
// function 함수디스트럭쳐링({ student, age }: { student: boolean; age: number }) {
//   console.log(student, age);
// }
// // 함수디스트럭쳐링({ student: true, age: 20 });
// 함수디스트럭쳐링(옵줵);
// // (((((((정리)))))))
// // 25번라인의 파라메터 부분이 let {student,age} 랑 똑같은거고
// // 30번라인의 (옵줵)이 === { student: true, age: 20 }; 니까
// // 25번라인과 30번 라인을 합치면 let {student,age}={ student: true, age: 20 }
// // 요런 구조분해할당으로 student에는 'true' , age에는 20 이 뽑아진 것
//---------------------------------------주석 한번 정리-----------------------------------
// function 함수(a: string | undefined) {
//   //&&가 앞의 값이 falsy(undefined,null,NaN)면 첫번째 등장하는 falsy값을 찾아줌
//   // falsy값이 'a'에서 나오게되면 if문이 실행이 안되니께
//   if (a && typeof a === "string") {
//   }
// }
// // 🌸 in 키워드 🌸
// // 'in'키워드로 찾으려면 '배타적인 속성'이 있어야된다.
// // 완전 다른 속성!!!!이 필요함
// type Fish = { swim: string };
// type Bird = { fly: string };
// function 함슈(animal: Fish | Bird) {
//   // Fish타입을 검사해주는 함수가 됌
//   if ("swim" in animal) {
//     animal.swim;
//   }
// }
// // 여기서는 'in'키워드를 쓸 수 있을까?
// // 정답은 No !!!
// // 이유 : 'in'키워드를 사용하려면 배타적인 속성이 있어야 하는데
// // Car과 Bike는 완죤 똑같은 속성밖에 없음
// // 그럼 instanceof를 사용할 수 있을까??
// // 정답은 No !!!
// // 이유: 부모 클래스가 없자농
// // ⭐️  해결책 ⭐️
// // 이런 경우 강제로 'literal type'을 만들어두기 (wheel : '4개')
// type Car = {
//   wheel: "4개";
//   color: string;
// };
// type Bike = {
//   wheel: "2개";
//   color: string;
// };
// function 함슝(x: Car | Bike) {
//   if (x.wheel === "4개") {
//     console.log("x는 Car타입이에염");
//   }
// }
//-----------------------------------------주석 한번 쉬기---------------------------
// //🌸 객체지향언어 🌸
// //public, private, protected, static
// // ts를 쓰면 객체지향언어 쓸 수 있음
// // 🍀🍀🍀🍀 # public 키워드 : 생략가능
// class Public키워드 {
//   // public:이 name을 자유롭게 갖다쓰고 수정가능
//   // public은 안써도 디폴트로 설정되어있음
//   public name = "kim";
//   constructor(a) {
//     this.name = a;
//   }
//   //프로토타입함수에도 public붙일 수 있다.
//   public 여기쓰먼프로토타입함수() {}
// }
// // 필드에 쓰나, constructor에 쓰나 무슨차인가요?
// // constructor는 파라메터 지정이 가능하기 때문에
// // new User('aaa') 요렇게 쓸 수 있어서 constructor쓰는 것
// let public유저 = new Public키워드("park");
// public유저.name = "안뇽";
// // 🍀🍀🍀🍀  # private 키워드
// //  class안에서만 수정, 이용가능
// class private함수 {
//   name: string = "난네임디폴트겠네";
//   private familyName: string = "kim";
//   constructor(a) {
//     // 위에 있는 '필드값' 갖다쓰고싶으면 this. 을 붙여줘야 한다.
//     this.name = this.familyName + a;
//   }
//   비상이름변경함수(x) {
//     this.familyName = x;
//   }
// }
// let private유저 = new private함수("니똥");
// // private유저.familyName;
// // 에러가 뜬다.
// // 이유 : private를 붙이면 class { } 안에서만 수정이 가능하다.
// console.log("private유저", private유저);
// // 비상상황으로 private를 함수 밖에서 바꾸고 싶다면??
// // 미리 class안에 '비상변경함수'를 만들어놓고 써주면 됌
// private유저.비상이름변경함수("비상이름");
// console.log("private유저", private유저);
// // 🍀🍀🍀🍀 constructor에 public 넣어서 코드 축약하기
// // ⭐️ 이렇게, constructor의 파라메터에 public '이름' 을 붙여주면
// // 자동으로 자식의 속성 '이름'에 기입해주세요 라는 명령이 된다.
// class 축약해보자 {
//   constructor(public name: string) {}
// }
// let 축약자식 = new 축약해보자("name값");
// console.log("축약자식", 축약자식);
//---------------------------------------주석 한번 쉬기------------------------------
// class안에 Private으로 붙이면, extends한 자식들이 조작할 수가 없다.
var User = /** @class */ (function () {
    function User() {
        this.x = 10;
    }
    return User;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NewUser;
}(User));
var 사람 = new NewUser();
// 사람.x = 20;   <----------- 에러남
// class안에 private을 붙여주면, 자식들은 갖다 변형할 수가 없음
// 🍀🍀🍀🍀 # protected
// private의 확장형으로 private보다 좀더 유순한 버전
// protected는 부모class를 확장한 자식들도 변형ㅇㅋ
var ProtectedUser = /** @class */ (function () {
    function ProtectedUser() {
        this.x = 10;
    }
    return ProtectedUser;
}());
var ProtectedNewUser = /** @class */ (function (_super) {
    __extends(ProtectedNewUser, _super);
    function ProtectedNewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // protected는 부모class를 확장한 자식안에서 x를 변경가능한 것 확인
    ProtectedNewUser.prototype.doThis = function () {
        this.x = 20;
    };
    return ProtectedNewUser;
}(ProtectedUser));
// 🍀🍀🍀🍀 # static
// 부모class만 갖다쓸 수 있음(자식에게 안물려줌)
// but, 부모class를 extends하면 물려줌
// static은 private과 protected와 public과 동시에 쓸 수 있다!
var StaticUser = /** @class */ (function () {
    function StaticUser() {
        this.y = 20;
    }
    StaticUser.x = 10;
    return StaticUser;
}());
var Static자식 = new StaticUser();
console.log(Static자식.x); //결과값 : undefined
var StaticExtends자식 = /** @class */ (function (_super) {
    __extends(StaticExtends자식, _super);
    function StaticExtends자식() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StaticExtends자식;
}(StaticUser));
console.log("StaticExtends자식은 x가 있나?", StaticExtends자식.x);
//
var 응용하기 = /** @class */ (function () {
    function 응용하기() {
        this.intro = 응용하기.skill + "전문가입니다.";
    }
    // static을 붙이면 자식들이 못물려받음
    // static은 부모를 통해서만 물려받으니 'this'키워드로 못물려줌
    응용하기.skill = "js";
    return 응용하기;
}());
var 철수 = new 응용하기();
console.log(철수);
// 이 이후부터는 ts전문가입니다 이길 바람
응용하기.skill = "ts";
var 민수 = new 응용하기();
console.log(민수);
// 옛날 타스 문법임 (import, export 없을때)
///<reference path="./a.ts"/>
// 네임스페이스.Name 이런식으로 썼었음
