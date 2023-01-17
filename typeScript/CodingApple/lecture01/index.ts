import { type } from "@testing-library/user-event/dist/type";

// let 이름: string = "kim";
// // let 괄호쳐도됨: (string | number) = 3;

// let 유니온타입이후는: number | string = "kim";
// // 유니온타입을 이렇게 지정해놨다가, 값이 할당이 되고 난 후에는
// 유니온타입이후는;
// //마우스 올려보면 string으로 타입이 확정나있음
// //but, 저따 숫자 할당하면 또 number가능해짐

// // 오브젝트는 이런식으로 타입 지정
// let 오브젝트: { name: string; age: number } = { name: "hong", age: 20 };
// // 배열안에 숫자랑 string을 같이 넣고 싶을때?
// // 소괄호로 묶어주기 !!!!
// let 객체유니온지정: (number | string)[] = [1, 2, 3, "string"];
// let 오브젝트유니온지정: { a: string | number } = { a: "string" };

// // 🌸 Any타입 : 쉴드 해제 🌸
// //암거나 다 집어넣으면 된다.
// let 애니: any;
// 애니 = 123;
// 애니 = true;

// // 🌸 unknown 타입 : any랑 비슷함 🌸
// // 모든 자료형을 허용해줌
// let 언노운: unknown;

// // 👀 unknown이 any보다 안전한 이유?
// // 언노운을 넣으면 string아니라고 에러가 잡혀주는데
// // -----> any로 했었으면 여기서 안걸린다.(애니는 쉴드 해제시키는 바이러스같은애임)
// // ex) let 변수1: string = 언노운;
// let 변수1: string = 애니;

// //타입스크립트는 사칙연산을 할때 'number'인 애만 가능하게 해줘서
// // unknown으로 했다면 ,ts가 걸러주지만 any는 또 노룩패스임

// //타입스크립트는 number아니면 즈얼대 안받아줌
// let 나이: string | number;
// // 나이 + 1;    <----얘 에러남!!
// // 이유:  'string | number' 라는 새로운 타입이라고 인식하는 것!!!

// // 🌸 함수 타입 지정 🌸
// // 파라미터에 타입지정 안해주면,any로 타입 자동지정됌
// // function 함수(x) {
// function 함수(x: number): number {
//   return x;
// }
// // void -> return 하지 않겠다는것 (void : 텅 비었다)

// function 보이드(x: number): void {
//   console.log(x);
// }

// // 보이드();    <--- 요렇게 작성하면 에러남
// // 이유 : ts는 타입지정된 파라미터는 필수값임
// // 싫으면 파라미터에 ? 넣어주면 되게찡

// // 🌸 물음표의 의미? 아래와 똑같은 의미임!!
// // x : number | undefined === x? : number
// function 물음표의의미(x: number | undefined): void {
//   console.log(x);
// }

// // 🌸 타입 Narrowing & Assertion 🌸

// function 내함수(x: number | string) {
//   if (typeof x === "string") {
//     let array: number[] = [];
//     if (typeof x === "number") {
//       array[0] = x;
//     }
//     // else문은 확실하게 넣어주기
//     // 타입이 여러가지인 경우 if문만 쓰면 오류날수도 있다고 함.
//     else {
//     }
//   }
// }
// // 🌸 Narrowing으로 판정해주는 문법들 🌸
// // 1. typeof 변수
// // 2. 속성명 in 오브젝트자료
// // 3. 인스턴스 instanceof 부모

// //  🌸 Assertion : 타입을 잠깐 덮어씌우는 것 🌸
// function Assertion문법(x: number | string) {
//   let 어레이: number[] = [];
//   //   if (typeof x === "number") {
//   //     어레이[0] = x;
//   //   } else {
//   //   }
//   어레이[0] = x as number; // <--- x as number
//   // 왼쪽에 있는 x를 number타입으로 덮어씌워주세영 하는 문법

//   // as 문법의 용도?
//   // 1. 복잡하게 얽힌 유니온 타입을 '하나'로 확정하고싶을때 씀(어썰션) => 네로잉할때
//   // 2. 어떤 타입이 들어올지 100% 확신할때 사용
//   // 3. 한마디로 너무 타입이 확실할때, 남이짠코드에서 에러날때 한번 확인해보는것
//   // but, as 문법자체가 구라로 타입을 정해주는거라서 대부분 If문으로 쓰면 됌->이래야 버그 추적이 가능
// }

// // 🌸 타입 변수 🌸 === 타입 alias (별명,별칭)
// // 'type' 이라는 키워드로 변수 만들수있음
// // 타입변수(타입엘리어스)는 첫글자 '대문자' or 끝에 Type 이름을 붙여준다.
// type Animal = string | number | undefined;
// let 동물: Animal = 3;

// // 더 길고 복잡한 object타입도 넣을 수 있음
// let 난복잡한옵줵이야: { name: string; age: number; school: string } = {
//   name: "hong",
//   age: 3,
//   school: "하버드",
// };

// type 내가간단하게해줄게얍 = {
//   name: string;
//   age: number;
//   school: string;
// };

// let 난간단해진옵줵이야: 내가간단하게해줄게얍 = {
//   name: "hong",
//   age: 3,
//   school: "하버드",
// };

// //
// // const 출생지역 = 'seoul'하면 재할당이 안되지만
// // 옵줵타입으로 이렇게 해놓으면, 안에 있는 object를 수정하는걸 막지는 않음
// const 출생지역 = { region: "seoul" };
// // 타입스크립트에서는 object수정을 막는것도 가능함(Lock)
// // 실제 js에서 막아주는건 아님

// //🌸 readonly : 읽기전용 속성 🌸
// type 걸프렌드 = {
//   readonly name: string;
// };

// const 여친: 걸프렌드 = {
//   name: "엠버",
// };

// // 여친.name = '유라' <----이렇게 수정하려고 하면 에러가 난다.
// // but, 주의!!!
// // 타입스크립트에서 에러라고는 뜨지만
// // 실제로 js가보면 여친.name이 여전히 '유라'로 바뀌고 있는걸 알 수 있음

// // 🌸 타입변수를 유니온타입으로 바꿔주기 🌸
// type 네임 = string;
// type 나이 = number;
// type 네임나이 = 네임 | 나이;

// type PositionX = { x: number };
// type PositionY = { y: number };

// // 🌸 object를 extends한다 === 두가지 합치기 🌸
// type 두가지옵줵타입을합쳐 = PositionX & PositionY;
// // 두가지옵줵타입을합쳐 : {x: number,y: number }
// let position: 두가지옵줵타입을합쳐 = { x: 10, y: 20 };

// // 🌸 더 엄격하게 타입지정하기 🌸
// let 엄격이름: "kim";
// // 무조건 '엄격이름'에는 kim만 들어올 수 있음

// // let(리터럴타입) : const는 하나밖에 못담는데 const의 업그레이드 버전이라고 생각해도 좋음
// let 접니다: "대머리" | "솔로";
// 접니다 = "대머리";

// // 무조건 이 파라메터 자리에는 'hello'만 들어올 수 있음
// // return도 무조건 0,1만 되어야한다 요러케 지정도 가능
// function 함슈(a: "hello"): 1 | 0 {
//   return 1;
// }

// // 퀴즈 : 가위바위보만 파라메터로 받고
// // 가위바위보만 담을수있는 함수를 리턴해야 한다.
// type 주먹가위보 = "주먹" | "가위" | "보";

// function 롹시져페퍼(x: 주먹가위보) {
//   let arr: 주먹가위보[] = [];
//   return arr;
// }

// 롹시져페퍼("가위");

// // 🌸 리터럴타입의 문제점 🌸

// var 자료 = {
//   name: "kim",
// } as const;
// // ⭐️⭐️ as const : 210번 주석보세유

// function 리터럴문제점(a: "kim") {
//   console.log("뭐가문제야썸띵~");
// }
// 리터럴문제점(자료.name);
// // 이유 : a는 'kim'이라는 type이 들어올 수 있는거고
// // 자료.name은 'string'타입인거다

// // a : kim = 값;
// // 자료.name은 그냥 'string 값'이라는것!!!

// // 해결법??
// // var 자료에 확실하게 kim이 무슨타입인지 정해주기
// // 1) var 자료: { name: "kim" } = {
// // 라고 name을 "kim" 타입이라고 해주거나
// // 2) 리터럴문제점(자료.name as "kim");
// // 으로 사기치기
// // 3) var 자료 = { name : 'kim'} as const ⭐️⭐️
// // 이 object 자료를 만들때 '리터럴 타입'처럼 지정을 해달라 라고 말하는 것
// //  ⭐️⭐️ as const
// // 1. object value값을 그대로 타입으로 지정해주세여
// // 2. object 속성들에 모두 readonly를 붙여주세여
// // --> 자료.name=123; 이런식으로 변경 불가능해짐
// // 결론 : object자료를 만들고 이를 추후 변경할 수 없게 + 타입마저도 리터럴타입으로 만들고 싶을때 사용!!!

//-------------주석 한템포------------------------

// 🌸 type alias에 함수타입 전체를 저장해서 쓰기 🌸
// 함수타입지정은 화살표함수로 써주깅
type 함수타입 = (a: string) => number;

let 함수: 함수타입 = function (a) {
  return 3;
};

type 옵줵에함수저장 = {
  name: "kim";
  plusOne: (a: number) => number;
  //changeName는 아무것도 리턴하지 않음
  changeName: () => void;
};

// 옵줵 안에 함수 실행하기
// 옵줵에함수저장.plusOne(3);

// 🌸 콜백함수

function 함수1(a) {
  a();
}

function 함수2() {}

함수1(함수2);

//퀴즈

type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  // 첫글자가 0으로 오면 ""으로 바꿔라
  let result = x.replace(/^0+/, "");
  return result;
};

type removeType = (x: string) => number;

let removeDash: removeType = function (x) {
  //문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거
  let result = x.replace(/-/g, "");
  //parseFloat : string을 Number타입으로 바꿔준다.
  return parseFloat(result);
};

//퀴즈3
type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;

function 만들함수(a: string, func1: 함수타입1, func2: 함수타입2) {
  let result = func1(a);
  //cutZero(010-1111-2222)
  //result 값으로 0 떼고, string타입으로 뱉어냄
  let result2 = func2(result);
  // 그 result를 removeDash에 보내서, '-' 떼고 number타입으로 토해냄
  console.log(result2);
  //그럼 result2의 값은 number~~
  // 출력값:1011112222
}
만들함수("010-1111-2222", cutZero, removeDash); //1011112222 출력잘됨
