// 🌸  튜플타입 🌸

// 물음표는 무조건 맨 뒤부터 쳐주지 않으면 에러난다.
// 몇번째 자리인지를 모르니까
// let 멍멍 : [string,boolean?,number] = ['dog',true];

// 🌸 rest파라메터 🌸
// rest파라메터엔 어레이[]식으로 타입지정을 해주어야 한다.
// 역시 어레이기 때문에, 튜플타입 가능!!
// function 함수(...x : [string,number]){  <- 첫번재는 string, 두번째는 number가 들어와야된다.
function 함수(...x: number[]) {
  console.log(x);
  // array가 출력될거임
}

// 스프레드오퍼레이트가 붙은건 이렇게 해주면 된다.
// ...number[] : array number가 들어올건데, 몇개가 들어올지는 아직 몰라유 의미
let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];

// 🌸 declare 🌸
// 어디선가 정의된 것을 타입스크립트에서 재정의할때 사용

// 어디선가 a가 정의가 됐는데, (다른 js파일)
// 이걸 타입스크립트에서 에러내고 싶지 않을때
// 'a'가 어디엔가 있어여, 에러내지 말아주세여 라는 뜼

// declare let a;
interface CarType {
  model: string;
  price: number;
  // age :number,
}

//   저 age를 주석풀면 에러남
class Car implements CarType {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 붕붕이 = new Car("morning");

// 🌸 오브젝트 타입지정 쉽게 하기 🌸
// object index signatures
interface 할로 {
  name: string;
  age: string;
  location: string;
}

// object index signatures
//->한번에 싸잡아서 string이다.
interface 싸잡아스트링 {
  [key: string]: string;
  //   [key: string]: string |number;
  // 이런식으로 타입 확장해서도 쓸 수 있음

  // ** age도 key타입이 string이자넝
  age: string;
}
let 옵줵이지 = {};

// 🌸
// object가 중첩으로 들어있으면??
let 좐나많은옵줵: 줜나많은인터페이스 = {
  "font-size": {
    "font=size": {
      "font-size": 14,
    },
  },
};

// interface 줜나많은인터페이스 {
//   "font-size": {
//     "font=size": {
//       "font-size": number;
//     };
//   };
// }

//위 인터페이스를 리컬시브하게 사용할 수 있는데
interface 줜나많은인터페이스 {
  "font-size": 줜나많은인터페이스 | number;
}

//
let obj = { name: "kim", age: 20 };
// obj가 가지고있는 key값들을 어레이에 담아서 준다.
Object.keys(obj);

interface Perspn {
  age: number;
  name: string;
}

type PersonKeys = keyof Perspn;
// 이 자리에 새로운 타입이 남음 age, name이 남음
// 유니온 타입으로 만들어줌!!!

let a1: PersonKeys = "name";
// let a12 : PersonKeys = 'name1'

type Car1 = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type 타입변환기만들기<MyType> = {
  // 파라메터로 들어온 object타입의
  // key값들을 유니온 타입으로 만들어주세요 (keyof)
  [key in keyof MyType]: string;
};

type 새로운타입 = 타입변환기만들기<Car1>;

// 🌸 조건문으로 타입만들기 🌸
// T: 타입 파라메터
// 타입파라메터를 입력하면 그대로 타입파라메터를 남겨주는 타입
// 1) 타입의 조건문은 삼항연산자로 써야한다.
// 2) 조건식은 extends로 써야한다.
type Age<T> = T extends string ? T : unknown;

let 실험: Age<string>;

// 🌸 infer : 왼쪽에서 타입 뽑아주세용 🌸
// 왼쪽에서 타입 뽑아서 R이라는 변수에 담아주세용
type 인펄<T> = T extends (infer R)[] ? R : unknown;

// infer로 뽑는 이유?
// '머남아'는 string만 남아서 string이 된다.
type 머남아 = 인펄<string[]>;
// array에서 array가 가지고있는 타입 하나를 뽑을 수 있다.

type b = ReturnType<() => void>;
