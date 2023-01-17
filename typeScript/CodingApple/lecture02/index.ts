// 🌸 HTML 변경과 조작할 때 주의점

let title = document.querySelector("#title");
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

let 링크 = document.querySelector(".link");
// 링크.href='https://kakao.com'

//이렇게 해도 에러가 난다.
// if (링크 instanceof Element) {
//HTMLAnchorElement를 사용해줘야함
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}

let 버튼 = document.querySelector("#button");
// '버튼'이 있으면 addEventListener를 붙여주고
// 아니면 undefined를 뱉어주세여 라는 뜻
버튼?.addEventListener("click", function () {});

// 사진바꾸기
let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
  이미지.src = "change.jpg";
}

//같은 class이름의 여러개를 바꾸고 싶을땐?
let 링크1 = document.querySelectorAll(".naver");

// 여러개찾은 요소를 forEach를 통해서 돌려준것
링크1.forEach((a) => {
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
class Person {
  data = 0; // <---요기에 선언하는걸 필드값이라고 함
  // constructor안에 넣으면 각각 독립적으로 속성이 복사가 된다.
  name: string; // ⭐️⭐️ constructor안에 쓸 변수를 '필드'쪽에서 미리 선언해줘야 에러가 안난다.
  // ⭐️⭐️ class의 constructor 리턴타입
  constructor(a: string) {
    this.name = a;
  }
  함수(a: string) {
    console.log("안녕" + a);
  }
}

let 사람1 = new Person("kim");
let 사람2 = new Person("hong");

// 🌸 interface문법 🌸
// object는 '타입'이나 'interface키워드'로 만들 수 있음
type Square = { color: string; width: number };
let 네모: Square = { color: "red", width: 100 };

interface 스퀘어 {
  color: string;
  width: number;
}

let 네모2: 스퀘어 = { color: "red", width: 100 };

// type과 다른 이유??
//

//⭐️ interface는 '확장'(extends)을 할 수 있다!!!!!
interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}
let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };

//  🌸 타입 엘리어스도 extends할수있음 === '인터섹션'이라고 한다 🌸
// 인터섹션 : 왼쪽도 만족하고 오른쪽도 만족하는 타입을 만들어주세요 라는 뜻
type Animal = { name: string };
type Cat = { age: number } & Animal;

//인터페이스는 중복선언이 가능하다.
// 중복선언이 되면 '합쳐진다' (자동 extends)가 된다고 생각하기
interface Student {
  score: number;
}

//type은 중복선언이 안된다.

// 타입스크립트 라이브러리는 인터페이스로 도배가 되어있는데
// 그걸 커스터마이징 하고싶을때 내가 인터페이스로 속성을 추가해서 사용할 수가 있음
