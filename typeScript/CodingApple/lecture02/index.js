// 🌸 HTML 변경과 조작할 때 주의점
var title = document.querySelector("#title");
// title?.innerHTML = "반가워요";
// 에러가 나는 이유 : union타입이래
// 엘레먼트나 아니면 null타입일수도 있자나!! 라고 말하는 것
// 해결 방법 : 아래처럼 narrowing을 해주어야한다.
if (title != null) {
    title.innerHTML = "반가워요";
}
//  🌸 네로잉하는 방법 🌸
// 1. instanceof 연산자 사용
// if(title instanceof Element){
//     title.innerHTML='반가워요'
// }
// 2. document.querySelector("#title") as Element
// 3. if(title?.innerHTML != undefined){
// title이 없으면 undefined값인데
// undefined가 아니면? 이니까 값이 있는거임
// 4. tsconfig.json에서 'strictNullChecks'를 false로 바꿔줘도 됌
var 링크 = document.querySelector(".link");
// 링크.href='https://kakao.com'
//이렇게 해도 에러가 난다.
// if (링크 instanceof Element) {
//HTMLAnchorElement를 사용해줘야함
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
var 버튼 = document.querySelector("#button");
// '버튼'이 있으면 addEventListener를 붙여주고
// 아니면 undefined를 뱉어주세여 라는 뜻
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () { });
// 사진바꾸기
var 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "change.jpg";
}
//같은 class이름의 여러개를 바꾸고 싶을땐?
var 링크1 = document.querySelectorAll(".naver");
// 여러개찾은 요소를 forEach를 통해서 돌려준것
링크1.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
//아래는 일반 for문으로 쓰는 경우
// let 링크 = document.querySelectorAll('.naver');
// for (let i = 0; i < 3; i++){
//   let a = 링크[i];
//   if (a instanceof HTMLAnchorElement){
//     a.href = 'https://kakao.com'
//   }
// }
// 🌸 Constructor : 정해진 키밸류를 가진 객체를 편리하게 생성할 수 있게 도와주는 기계같은 역할
// class끼리도 extends 가능가능
var Person = /** @class */ (function () {
    // ⭐️⭐️ class의 constructor 리턴타입
    function Person(a) {
        this.data = 0; // <---요기에 선언하는걸 필드값이라고 함
        this.name = a;
    }
    Person.prototype.함수 = function (a) {
        console.log("안녕" + a);
    };
    return Person;
}());
var 사람1 = new Person("kim");
var 사람2 = new Person("hong");
var 네모 = { color: "red", width: 100 };
var 네모2 = { color: "red", width: 100 };
var 학생 = { name: "kim" };
var 선생 = { name: "kim", age: 20 };
//type은 중복선언이 안된다.
// 타입스크립트 라이브러리는 인터페이스로 도배가 되어있는데
// 그걸 커스터마이징 하고싶을때 내가 인터페이스로 속성을 추가해서 사용할 수가 있음
// ----> 다른 사람이 이용 만ㅇ히할 것 같으면 옵줵타입 정할때 인터페이스 사용하기
