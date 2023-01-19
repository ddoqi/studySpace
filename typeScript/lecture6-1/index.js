"use strict";
// 🟡 인터페이스 : 클래스를 구현하기전에 필요한 메소드를 정의하는 용도 🟡
// 타입스크립트에서는 좀 더 다양한 것들을 정의한다.
Object.defineProperty(exports, "__esModule", { value: true });
const person1 = { name: "js", age: 20 };
const person2 = { name: "js", age: 18 };
const person3 = { name: "js" };
const person10 = { name: "니똥" };
// person10.name="내똥" //요렇게 하면 에러남, 다시 값 재할당 못함
// ReadonlyArray (읽기전용배열)
let 리드온리배열 = [1, 2, 3];
const p1 = { name: "js", birthDay: "내생일", age: 20 };
// type 타입 = (name : string,age:number) => string
// 위와 동일한 것
const getNameAndAge = function (name, age) {
    return `name : ${name}, age : ${age}`;
};
//🟡 제네릭 🟡
// < > | T
function getText(text) {
    // T에 string이 들어감
    return text;
}
// getText<string>("hi");
// getText("hi");  <-- 이렇게 생략도 가능하다.
getText(10);
getText(true);
// function getItemArray(arr: any[], index: number): any {
function getItemArray(arr, index) {
    return arr[index];
}
// function pushItemArray(arr: any[], item: any): void {
function pushItemArray(arr, item) {
    arr.push(item);
}
const 난스트링배열이양 = ["js", "react"];
const 난숫자배열이양 = [1, 2, 3, 4, 5];
getItemArray(난스트링배열이양, 0);
pushItemArray(난스트링배열이양, "날푸쉬해죵");
getItemArray(난숫자배열이양, 0);
pushItemArray(난숫자배열이양, 3);
// 위 코드가 에러난 이유가 머징?
// 이유 : 난숫자배열이양 배열은 숫자array였기때문!!!
// 아래처럼 코드를 짜면 에러가 난다.
// 이유 : Input타입이 배열이나 string으로 들어오면 length를 쓸 수 있지만
// 타입스크립트는 저 T에 input이 어떤 타입이 들어올지를 모르기때문!!
// function printOut<T>(input: T): T {
function printOut(input) {
    // 따라서 T뒤에 이렇게 배열[]을 넣어주면, 무조건 배열은 length가 있어서 에러가 안남
    console.log(input.length);
    return input;
}
printOut([12, 3, 4]);
//이렇게 인터페이스 확장을 한 경우에 T는 Lengthwise의 length를 가지고 있어서
// 에러가 나지 않는것을 볼 수 있음
function 제너릭제약조건(input) {
    console.log(input.length);
    return input;
}
