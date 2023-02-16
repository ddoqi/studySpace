// >>헷갈렸던 if문 return
// function addFuc(x, y) {
//   if (x > 3) {
//     return 1;
//   }

//   console.log("안찍히지롱");
//   return x + y;
// }
// const answer = addFuc(4, 2);

// >> arguments : 매개변수 안넣어줘도 기본적으로 이 arguments에 다 들어있음

// >> 화살표함수

// const double = function (x) {
//   return x + 2;
// };

// // const doubleArrow = (x) => {
// //   return x + 2;
// // };
// // 위 함수에서 { } 와 return을 제거하면 아래식처럼 축약해서 쓸 수 있다.
// const doubleArrow = (x) => x + 2;

// // 만약 return 하는 값으로 옵줵(객체)를 하고 싶어서
// // { } 를 쓰면 어떻게 될까??

// const cantUsingTest = (x) => ({
//   name: "hong";
// });
// // 결과값 : undefined
// // 이유 : 화살표 함수에서 감싸주는 기호르  { } 를 써서, object타입인지 모른다.
// // 객체 타입을 반환하고 싶으면 어떻게 해야할까?
// // => ( ) 를 이용하여 한번 더 묶어주기

// const answer = doubleArrow(2);
// console.log("answer:", answer);

// >> 즉시실행함수 ( IIFE )
// invoke : 들먹이다, 언급하다.
// 익명함수를 그 자리에서 만들자마자 바로 실행할 수 있는 즉시실행함수

// function double() {
//   console.log("일반적인 함수 실행");
// }

// // 1) 일반적 함수
// double();

// // 2 ) (function(){})()  : iimf 방법1
// (function () {
//   console.log("나 급행!!!");
// })();

// // 3) ( function(){}() ) : iimf 방법2
// (function () {
//   console.log("나도 급행!!!");
// })();

// >> 호이스팅

// 1) 함수표현식(express)

// const a = "a";

// expressFuc();
// //결과값이 expressFuc가 undefined가 뜰 것

// declareFuc();
// //얘는 함수선언식이라 아래에서 선언햇어도 hoisting때문에 여기서도 실행 ㅇㅋ

// const expressFuc = function () {
//   console.log("a:", a);
// };

// // 2) 함수선언식

// function declareFuc() {
//   console.log("나는 실행되지롱~", a);
// }

// >> 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수 종료
// clearInterval() : 설정된 Inteval 함수 중료

// const timer = setTimeout(function () {
//   console.log("실행!!!");
// }, 1000);

// // setTimeout을 실행하게 되면, setTimeout에서 특정한
// // 타이머 값이 반환이 된다.
// console.log("timer : ", timer);

// clearTimeout(timer);
// clearTimeout()은 예를 들어, 버튼을 누르면 실행이 되게 하면 되겠지
// '중지' 버튼을 누르면 clearTimeout이 실행되도록

// const buttonIcon = document.querySelector('h1');
// buttonIcon.addEventListener('click', () => { setTimeout(timer)});

//  >> 콜백함수 : 어떤 함수의 인수로 들어가는 함수
// -----------------------------------
// function timeout() {
//   setTimeout(() => {
//     console.log("ㅎㅇ");
//   }, 3000);
// }
// timeout();
// console.log("내가 먼저 나올거지롱");
// -----------------------------------
// 내가먼저나올거지롱을 ㅎㅇ 다음에 출력하고 싶으면
// 저 console.log를 timeout에 함수로 넣어버리장
// -----------------------------------
// function timeout(cb) {
//   setTimeout(() => {
//     console.log("ㅎㅇ");
//     cb();
//   }, 3000);
// }
// timeout(() => {
//   console.log("내가 나중에 나오겠네 ㅠ.ㅠ");
// });
// console.log("내가 먼저 나올거지롱");

// -----------------------------------
