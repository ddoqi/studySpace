// 🟡 인터페이스 : 클래스를 구현하기전에 필요한 메소드를 정의하는 용도 🟡
// 타입스크립트에서는 좀 더 다양한 것들을 정의한다.

import { text } from "express";

// 타입 얼라이어스랑 구조는 비슷함
// 1)기본 속성
interface Person {
  name: string;
  age: number;
}

const person1: Person = { name: "js", age: 20 };
const person2: Person = { name: "js", age: 18 };

// 2)선택 속성
interface Person0 {
  name: string;
  age?: number;
}
const person3: Person0 = { name: "js" };

//Read Only 속성
// 객체를 처음 생성할때만 값을 할당할 수 있고, 그 이후에는 할당할 수 없음

interface Person5 {
  readonly name: string;
  age?: number;
}

const person10: Person5 = { name: "니똥" };
// person10.name="내똥" //요렇게 하면 에러남, 다시 값 재할당 못함

// ReadonlyArray (읽기전용배열)
let 리드온리배열: ReadonlyArray<number> = [1, 2, 3];
// 리드온리배열.push(4); //요렇게 넣으려고 하면 에러남

// 🟡 인덱스타입🟡
// 인터페이스에서 속성의 이름을 구체적으로 정의하지 않고
// 어떤 값에 타입만 정의해놓은것

interface 인덱스타입 {
  // key는 무조건 string아니면 number만 들어올 수 있다.
  name: string;
  //  인덱스 key에는 string이 들어오고, value에는 number가 들어올 수 있다.
  [key: string]: string | number;
}

const p1: 인덱스타입 = { name: "js", birthDay: "내생일", age: 20 };

// 인터페이스의 함수타입
interface 인터페이스함수정의 {
  (name: string, age: number): string;
}

// type 타입 = (name : string,age:number) => string
// 위와 동일한 것

const getNameAndAge: 인터페이스함수정의 = function (name, age) {
  return `name : ${name}, age : ${age}`;
};

//🟡 제네릭 🟡
// < > | T
function getText<T>(text: T): T {
  // T에 string이 들어감
  return text;
}
// getText<string>("hi");
// getText("hi");  <-- 이렇게 생략도 가능하다.
getText<number>(10);
getText<boolean>(true);

// function getItemArray(arr: any[], index: number): any {
function getItemArray<T>(arr: T[], index: number): T {
  return arr[index];
}

// function pushItemArray(arr: any[], item: any): void {
function pushItemArray<T>(arr: T[], item: T): void {
  arr.push(item);
}

const 난스트링배열이양 = ["js", "react"];
const 난숫자배열이양 = [1, 2, 3, 4, 5];

getItemArray(난스트링배열이양, 0);
pushItemArray(난스트링배열이양, "날푸쉬해죵");

getItemArray(난숫자배열이양, 0);
pushItemArray(난숫자배열이양, "날푸쉬해죵");
// 위 코드가 에러난 이유가 머징?

// 아래처럼 코드를 짜면 에러가 난다.
// 이유 : Input타입이 배열이나 string으로 들어오면 length를 쓸 수 있지만
// 타입스크립트는 저 T에 input이 어떤 타입이 들어올지를 모르기때문!!
// function printOut<T>(input: T): T {
function printOut<T>(input: T[]): T[] {
  // 따라서 T뒤에 이렇게 배열[]을 넣어주면, 무조건 배열은 length가 있어서 에러가 안남
  console.log(input.length);
  return input;
}

printOut([12, 3, 4]);

// 제너릭 제약 조건
interface Lengthwise {
  length: number;
}
//이렇게 인터페이스 확장을 한 경우에 T는 Lengthwise의 length를 가지고 있어서
// 에러가 나지 않는것을 볼 수 있음
function 제너릭제약조건<T extends Lengthwise>(input: T) {
  console.log(input.length);
  return input;
}
