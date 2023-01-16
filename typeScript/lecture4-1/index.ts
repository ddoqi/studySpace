// 🌼 < 함수형 > 🌼
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// --> 함수는 반환타입을 생략할 수도 있음

// 화살표함수도 이렇게 쓸 수 있음
const add1 = (n1: number, n2: number) => {
  return n1 + n2;
};

// // a 빼고 다 에러나는 걸 볼 수 있음!!
// const a = add(1,2);
// const b = add1('1',2);
// const c = add(1,2,3);
// const d = add(10);

//🌼void

const void붙인함수 = (num: number): void => {
  console.log("result:", num);
};

// void라고 쓰면 return이 없다고 정해주는 건데
// 리턴타입은 생략할 수도 있다 했으니 아래처럼 void 생략도 가능하다.
const void생략해본함수 = (num: number) => {
  console.log("result:", num);
};

void붙인함수(3);

// 🌼 Optional Parameter 🌼

// n2이 안들어오면 n1 값을 리턴하도록 짜고싶은데
// % 주의 % : add2함수는 named 파라메터를 쓰지 않아서, 넣은 순서대로 들어간다.
// 이 ? 가 필요한 파라메터 앞에 위치할 수가 없다(무조건 순서대로 들어가서)
// n1에 ? 붙이면 A required parameter cannot follow an optional parameter. 라고 뜸
// 이런 경우엔 (n1:number, n2?:number , n3?:number)
// 3개를 만들어줘서 경고를 없앨 수 있다.

function add2(n1: number, n2?: number): number {
  // n2가 없는 경우에 n1만 반환하도록 작성한것
  if (!n2) return n1;
  return n1 + n2;
}

//숫자를 아래처럼 하나만 넣으면 ts에서는 에러가 남
// const n2를안넣으면에러가남 = add2(1);

// -> n2에 ?를 붙이면 해결된다 ( 옵셔널 파라메터 )
// 34번 라인에 n2뒤에 ? 붙인걸 확인할 수 있음
const 이제n2를안넣어도에러안남 = add2(1);

// 🌼 Default Parameter 🌼
// ts의 특징이 아니고 js에도 있는 기능임

// function add3(n1:number,n2:number=0){
// if(!n2) return n1;
// return n1+n2;
// }
// const 디폴트파라메터 = add3(10); //n2의 값이 0으로 들어감

// 🌼 <Rest Parameter> 🌼
// ES2015= ES6 에서 나온 것
// 뒤에 남는 요소들을 배열로 만들어준다.
// ...num5는 배열이기 때문에 number[] 라고 써야 한다.
function add4(n1: number, ...nums: number[]) {
  let totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return n1 + totalOfNums;
}

const result = add4(10, 20, 30, 40);
