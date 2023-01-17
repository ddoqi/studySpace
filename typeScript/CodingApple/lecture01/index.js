"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var 함수 = function (a) {
    return 3;
};
// 옵줵 안에 함수 실행하기
// 옵줵에함수저장.plusOne(3);
// 🌸 콜백함수
function 함수1(a) {
    a();
}
function 함수2() { }
함수1(함수2);
var cutZero = function (x) {
    // 첫글자가 0으로 오면 ""으로 바꿔라
    var result = x.replace(/^0+/, "");
    return result;
};
var removeDash = function (x) {
    //문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거
    var result = x.replace(/-/g, "");
    //parseFloat : string을 Number타입으로 바꿔준다.
    return parseFloat(result);
};
function 만들함수(a, func1, func2) {
    var result = func1(a);
    //cutZero(010-1111-2222)
    //result 값으로 0 떼고, string타입으로 뱉어냄
    var result2 = func2(result);
    // 그 result를 removeDash에 보내서, '-' 떼고 number타입으로 토해냄
    console.log(result2);
    //그럼 result2의 값은 number~~
    // 출력값:1011112222
}
만들함수("010-1111-2222", cutZero, removeDash); //1011112222 출력잘됨
