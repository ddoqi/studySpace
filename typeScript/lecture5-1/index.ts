// 🌼 숫자형 이넘 🌼
// enumeration의 줄임말임 (열거,목록)
// 오브젝트랑 비슷한 느낌
// { } 를 열고 나열될 자료들을 적음
// enum은 0부터 시작을 해서 멤버들의 번호를 메김
// Up이 0 , Down이 1,
enum Direction {
  Up,
  // Down = 200,
  Down,
  Left,
  Right,
}

console.log(Direction.Up, Direction.Down, Direction.Left);
//결과값 :0 1 2 나옴

//만약 Down에 = 200을 할당해주면
// 결과값은?
// 결과값 : 0 200 201

// Direction을 타입으로 할당했는데,
const up: Direction = Direction.Up;
const leftOrRight: Direction.Left | Direction.Right = Direction.Left;
console.log(up);
//결과값 ㅣ 0
console.log(leftOrRight);
//2가 나오넹

console.log(Direction[2]);
// 결과값: Left

enum 문자형이넘 {
  Up = "Up",
  Down = "DOWN",
}

enum 복합형이넘은권고하지않는다 {
  No = 0,
  Yes = "YES",
}

//🌼 유니온 타입 ( A || B )🌼
const printOut = (인풋값: string | number) => {
  console.log(인풋값);
};

printOut("문자열");
printOut(20);
// printOut(true); //에러

// 유니온 타입의 장점?
function getAge(age: number | string) {
  if (typeof age === "number") {
    // toFixed는 number만 받을수있음
    age.toFixed();
  }

  if (typeof age === "string") {
    return age;
  }
}

function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join("ㅗ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`${padding} 먼가 에러가 나쪙`);
}

console.log(padLeft("hello world", 4));
console.log(padLeft("hello world", "!!!"));

// var abc = Array(6).join("별") + "니똥";
// console.log(abc);

//🌼Type Alias(타입 별칭)🌼

type Hero = {
  name: string;
  power: number;
  height: number;
};

// const hero1: { name: string; power: numbe/r; height: number } = {
const hero1: Hero = {
  name: "슈퍼맨",
  power: 100,
  height: 180,
};

// const printHero = (hero: { name: string; power: number; height: number }) => {
const printHero = (a: Hero) => {
  console.log(a.name, a.power);
};

printHero(hero1);
