"use strict";
// ๐ก ์ธํฐํ์ด์ค : ํด๋์ค๋ฅผ ๊ตฌํํ๊ธฐ์ ์ ํ์ํ ๋ฉ์๋๋ฅผ ์ ์ํ๋ ์ฉ๋ ๐ก
// ํ์์คํฌ๋ฆฝํธ์์๋ ์ข ๋ ๋ค์ํ ๊ฒ๋ค์ ์ ์ํ๋ค.
Object.defineProperty(exports, "__esModule", { value: true });
const person1 = { name: "js", age: 20 };
const person2 = { name: "js", age: 18 };
const person3 = { name: "js" };
const person10 = { name: "๋๋ฅ" };
// person10.name="๋ด๋ฅ" //์๋ ๊ฒ ํ๋ฉด ์๋ฌ๋จ, ๋ค์ ๊ฐ ์ฌํ ๋น ๋ชปํจ
// ReadonlyArray (์ฝ๊ธฐ์ ์ฉ๋ฐฐ์ด)
let ๋ฆฌ๋์จ๋ฆฌ๋ฐฐ์ด = [1, 2, 3];
const p1 = { name: "js", birthDay: "๋ด์์ผ", age: 20 };
// type ํ์ = (name : string,age:number) => string
// ์์ ๋์ผํ ๊ฒ
const getNameAndAge = function (name, age) {
    return `name : ${name}, age : ${age}`;
};
//๐ก ์ ๋ค๋ฆญ ๐ก
// < > | T
function getText(text) {
    // T์ string์ด ๋ค์ด๊ฐ
    return text;
}
// getText<string>("hi");
// getText("hi");  <-- ์ด๋ ๊ฒ ์๋ต๋ ๊ฐ๋ฅํ๋ค.
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
const ๋์คํธ๋ง๋ฐฐ์ด์ด์ = ["js", "react"];
const ๋์ซ์๋ฐฐ์ด์ด์ = [1, 2, 3, 4, 5];
getItemArray(๋์คํธ๋ง๋ฐฐ์ด์ด์, 0);
pushItemArray(๋์คํธ๋ง๋ฐฐ์ด์ด์, "๋ ํธ์ฌํด์ฃต");
getItemArray(๋์ซ์๋ฐฐ์ด์ด์, 0);
pushItemArray(๋์ซ์๋ฐฐ์ด์ด์, 3);
// ์ ์ฝ๋๊ฐ ์๋ฌ๋ ์ด์ ๊ฐ ๋จธ์ง?
// ์ด์  : ๋์ซ์๋ฐฐ์ด์ด์ ๋ฐฐ์ด์ ์ซ์array์๊ธฐ๋๋ฌธ!!!
// ์๋์ฒ๋ผ ์ฝ๋๋ฅผ ์ง๋ฉด ์๋ฌ๊ฐ ๋๋ค.
// ์ด์  : Inputํ์์ด ๋ฐฐ์ด์ด๋ string์ผ๋ก ๋ค์ด์ค๋ฉด length๋ฅผ ์ธ ์ ์์ง๋ง
// ํ์์คํฌ๋ฆฝํธ๋ ์  T์ input์ด ์ด๋ค ํ์์ด ๋ค์ด์ฌ์ง๋ฅผ ๋ชจ๋ฅด๊ธฐ๋๋ฌธ!!
// function printOut<T>(input: T): T {
function printOut(input) {
    // ๋ฐ๋ผ์ T๋ค์ ์ด๋ ๊ฒ ๋ฐฐ์ด[]์ ๋ฃ์ด์ฃผ๋ฉด, ๋ฌด์กฐ๊ฑด ๋ฐฐ์ด์ length๊ฐ ์์ด์ ์๋ฌ๊ฐ ์๋จ
    console.log(input.length);
    return input;
}
printOut([12, 3, 4]);
//์ด๋ ๊ฒ ์ธํฐํ์ด์ค ํ์ฅ์ ํ ๊ฒฝ์ฐ์ T๋ Lengthwise์ length๋ฅผ ๊ฐ์ง๊ณ  ์์ด์
// ์๋ฌ๊ฐ ๋์ง ์๋๊ฒ์ ๋ณผ ์ ์์
function ์ ๋๋ฆญ์ ์ฝ์กฐ๊ฑด(input) {
    console.log(input.length);
    return input;
}
