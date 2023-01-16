// string 타입
let str: string = "typeScript";

// : <- 타입 표기(타입 어노테이션)

// str = 123;
// str = true;
// str = undefined;
// str = null
// 요렇게 넣으면 에러가 나는 것

let fullName: string = "nbc";
let age: number = 20;
let sententce: string = `my name is${fullName}`;

// Number: 10진수, 16진수 표현을 지원하고 에크마 2015에서 2진수, 8진수 표현

let decimal: number = 6;
let hex: number = 0xf00d; // 0x를 넣으면 16진수가 된다.
let binary: number = 0b1010; // 0b 를 넣으면 2진수가 되고
let octal: number = 0o744; // 0o를 넣으면 8진수

// Boolean

let isTrue: boolean = true;
let isFalse: boolean = false;

// Array

let arr: number[] = [1, 2, 3];
let arr1: string[] = ["a", "b"];
let arr2: boolean[] = [true, false];

// 이런식으로도 표현할 수 있음
let arr3: Array<number> = [1, 2, 3];
//  < > : 제네릭이라고 한다.

// Tuple 타입
let x: [string, number] = ["hello", 2];
// x =[2,'hi']    <----이렇게 하면 에러난다.
console.log(x[0], x[1]);

// Any
// 어떠한 타입도 다 들어갈 수 있음
let any: any = "hi";

// Void
// 함수에서 리턴값이 없을 경우 반환값의 타입이다.
// '함수 c는 반환값이 없다' 라고 알려주는 것
// Void는 변수의 타입으로는 사용하지 않는다.
function c(): void {
  console.log("c");
}

// null과 undefined
// null과 undefined는 각각의 변수에 할당할 수 있는 값이 없다.
// null과 undefined는 유니온 타입을 활용할때 같이 사용이 된다.
let a1: null = null;
let b1: undefined = undefined;

//  number나 null을 할당할 수 있는 것
let unionType: number | null = null;

// Never
// 함수가 비정상적으로 종료되거나 끝까지 실행되지 않았을때
function a(): never {
  // 1. 무한루프
  while (true) {}
}

function b(): never {
  // 2. 에러를 던지고 있음
  throw new Error("error");
}
