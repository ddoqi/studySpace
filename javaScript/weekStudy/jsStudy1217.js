// >> JS데이터
// (문자)
// String.prototype.indexOf()
// 호출한 String객체에서 주어진 값과 일치하는 첫번째 인덱스를 반환
// 일치하는 값이 없으면 -1을 반환한다.

// const paragraph =
//   "The quick brown fox jumps over the lazy dog. if the dog barked , If the dog barked, was it really";
// const searchTerm = "dog";

// const indexOfFirst = paragraph.indexOf(searchTerm);
// console.log("index of :", indexOfFirst);
// // 'd'가 40번에 있는걸 확인할 수 있음

// (문자)2

//new String() 이라는 생성자 함수 대신에
//  ' ' (리터럴)이라는 방식을 통해 데이터를 만든것이기 때문에
// // string.prototype.indexOf()로 안쓰고 아래처럼 쓸 수도 있다.
// const result = "Hello world!".indexOf("world");
// console.log("result:", result);
// // 결과가 없으면 -1 이 나온다.

// // (문자)3
// const str = "0123";
// console.log(str.length);
// // 결과값 : 4
// // 이것도 string.prototype.length니까 리터럴 형식에 '' 그대로 lengh붙여서 쓸 수도 있음
// ---------------------------------------
// const str = "abcdefg";
// console.log(str.indexOf("j"));
// // j가 없으니 결과값은 -1이 뜰 것
// // 만약 이 -1을 불린형으로 받고 싶으면 아래처럼 식 작성
// // str.indexOf("j")이게 -1이 나올것이니, -1과 달라? 라고 하면 같으니까 값이 false가 나오겠지
// console.log(str.indexOf("j") !== -1);
// // slice : 어디에서 시작해서 몇번째 직전까지 잘라낼건지
// // slice()는 문자열의 일부를 추출하면서 새로운 문자열을 반환한다.
// console.log(str.slice(2, 7));
// console.log("slice에 값을 안주면?", str.slice());
// // 결과 : 전체가 출력된다(새로 전체 복사하는 방법으로 써도 되겠네)
// // ---------------------------------------
// // replace ( ) : 2개의 인수를 사용한다.
// // replace ('기존 바꾸고싶은 문자','교체할 new 문자' )
// console.log(str.replace("abc", "HERO"));
// //replace로 특정 문자열을 제거도 할 수 잇는데,
// console.log(str.replace("defg", ""));

//-----------------------------
// // match () :
// const email = "emailId@naver.com";
// console.log(email.match(/.+(?=@)/));
// console.log(email.match(/.+(?=@)/)[0]);
// // -----------------------------
// // trim () : 앞뒤 공백 잘라내기
// const trimStr = "     hello world    ";
// console.log("trimStr :", trimStr.trim());
//-----------------------------

// >> (숫자)
// const pi = 3.14159265358979;
// const str = pi.toFixed(2);
// // 3.14까지만 출력되게 하고 싶어서 이렇게 toFixed를 사용하면?
// console.log(str);
// console.log(typeof str);
// // type은 String으로 바뀌는 것을 알 수 있음
// // toFixed()를 사용하면, 문자데이터가 반환되는 것을 알 수 있다.

// // parseInt , parseFloat -> js에서 제공하는 전역함수이다.
// // 전역함수 예시 : setTimeout,setInterval, clearTimeout, clearInterval
// // parseInt , parseFloat도 전역함수이다.
// //  parse : 분석한다 라는 의미
// const integer = parseInt(str);
// console.log("integer는 3만 반환", integer);
// // --> parseInt는 정수만 출력되는 것을 확인할 수 있다.
// // 결과값 : 3
// const float = parseFloat(str);
// console.log("float는 3.14를 반환", float);

// // 3.14로 나오게 하려면?
// // parseFloat를 사용하면 된다.
// // 결과값 : 3.14
// console.log(typeof integer);
// console.log(typeof float);
// // 출력해보면 타입이 number인것을 확인할 수 있음
//---------------------------------------
//---------------------------------------
// // Math 는 수학객체이다.
// // Math는 js에 내장되어있는 내장객체이지,함수객체가 아니다.
// // Math.abs() : absolute를 나타내는데(절대값)
// // -1이라면 1을 반환하고 , -99라면 99를 반환하는 것
// // 1) Math.abs()
// console.log("abs : ", Math.abs(-12));
// // 2) Math.min 은 들어온 숫자중에 가장 작은 값을 반환
// console.log("min : ", Math.min(2, 8));
// // 3) Math.max 은 들어온 숫자중에 가장 큰 값을 반환
// console.log("max : ", Math.max(2, 8));
// // 4) Math.ceil : '올림'하는 것
// // default값은 정수단위로 올림처리 해버린다.
// console.log("ceil:", Math.ceil(3.14));
// // 5) ceil(올림)과 반대로 내림차순하는 메소드 -> floor
// // Math.floor()
// console.log("floor:", Math.floor(3.14));
// // 6) Math.round : 반올림
// console.log("round:", Math.round(3.14));
// // 7) Math.random : 말그대로 랜덤한 숫자를 반환
// console.log("random:", Math.random());
//--------------------------------------
// Array (배열)
const numbers = [1, 2, 3, 4, 5];
const fruits = ["사과", "배", "체리"];

//1) Array.prototype.find() : 주어진 판별함수를 만족하는 '첫번째 요소'의 값을 반환한다.
// // 여기 find () 에 들어간 화살표함수는 '콜백함수'!!
// const found = numbers.find((e) => e > 3);
// // 이 find 함수는 numbers 배열을 하나씩 돌면서 동작하는데
// // 처음에 1을 넣고, 3보다 크지 않으니까 2로 넘어가고~~
// // 4가 3보다 큰 것을 만족하니 4를 토해내는 것(첫번째 만족한 인자)
// console.log(found);

// // 2) Array.length
// console.log([].length);
// // 이렇게 [].length 작성하여 0이 나오면 빈배열이라는 것을 유추할 수 있음
// // [].length로 배열이 비어있는지 확인할때 잘쓴다.

// // 3)Array.concat() : 2개의 배열데이터를 병합해서 새로운 배열데이터를 반환해주는 메소드
// console.log(numbers.concat(fruits));
// // 2개의 배열이 합쳐져서 새로운 배열이 반환된 것을 알 수 있음
// // concat은 원본(numbers,fruits)은 건드리지 않음!!

// //3)forEach():forEach()에 콜백함수를 인자로 넣음
// fruits.forEach(function (element, index, array) {
//   console.log(element, index, array);
// });
// fruits.forEach((x, y) => {
//   console.log(x, y);
// });
// forEach는 메소드가 실행되고 따로 '반환'되는 내용이 없다. 예를 들어
// const a = fruits.forEach((item, index) => {
//   console.log(`item은 ${item} index는 ${index}이다`);
// });
// console.log("a:", a);

// // map은 ? 내부의 콜백에서 반환된 데이터를 기준으로 그 데이터들의 모음인 새로운 배열을 반환해준다.
// // forEach와 다르게 return 키워드를 사용해서 , '반환'을 하고 있음
// const b = fruits.map((item, index) => {
//   return `item은 ${item} index는 ${index}이다`;
// });
// console.log("b:", b);

// map응용하기
const c = fruits.map((item, index) => {
  return {
    id: index,
    name: item,
  };
});

console.log("c:", c);
