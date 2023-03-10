// ๐ผ ์ซ์ํ ์ด๋ ๐ผ
// enumeration์ ์ค์๋ง์ (์ด๊ฑฐ,๋ชฉ๋ก)
// ์ค๋ธ์ ํธ๋ ๋น์ทํ ๋๋
// { } ๋ฅผ ์ด๊ณ  ๋์ด๋  ์๋ฃ๋ค์ ์ ์
// enum์ 0๋ถํฐ ์์์ ํด์ ๋ฉค๋ฒ๋ค์ ๋ฒํธ๋ฅผ ๋ฉ๊น
// Up์ด 0 , Down์ด 1,
enum Direction {
  Up,
  // Down = 200,
  Down,
  Left,
  Right,
}

console.log(Direction.Up, Direction.Down, Direction.Left);
//๊ฒฐ๊ณผ๊ฐ :0 1 2 ๋์ด

//๋ง์ฝ Down์ = 200์ ํ ๋นํด์ฃผ๋ฉด
// ๊ฒฐ๊ณผ๊ฐ์?
// ๊ฒฐ๊ณผ๊ฐ : 0 200 201

// Direction์ ํ์์ผ๋ก ํ ๋นํ๋๋ฐ,
const up: Direction = Direction.Up;
const leftOrRight: Direction.Left | Direction.Right = Direction.Left;
console.log(up);
//๊ฒฐ๊ณผ๊ฐ ใฃ 0
console.log(leftOrRight);
//2๊ฐ ๋์ค๋น

console.log(Direction[2]);
// ๊ฒฐ๊ณผ๊ฐ: Left

enum ๋ฌธ์ํ์ด๋ {
  Up = "Up",
  Down = "DOWN",
}

enum ๋ณตํฉํ์ด๋์๊ถ๊ณ ํ์ง์๋๋ค {
  No = 0,
  Yes = "YES",
}

//๐ผ ์ ๋์จ ํ์ ( A || B )๐ผ
const printOut = (์ธํ๊ฐ: string | number) => {
  console.log(์ธํ๊ฐ);
};

printOut("๋ฌธ์์ด");
printOut(20);
// printOut(true); //์๋ฌ

// ์ ๋์จ ํ์์ ์ฅ์ ?
function getAge(age: number | string) {
  if (typeof age === "number") {
    // toFixed๋ number๋ง ๋ฐ์์์์
    age.toFixed();
  }

  if (typeof age === "string") {
    return age;
  }
}

function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join("ใ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`${padding} ๋จผ๊ฐ ์๋ฌ๊ฐ ๋์ช`);
}

console.log(padLeft("hello world", 4));
console.log(padLeft("hello world", "!!!"));

// var abc = Array(6).join("๋ณ") + "๋๋ฅ";
// console.log(abc);

//๐ผType Alias(ํ์ ๋ณ์นญ)๐ผ

type Hero = {
  name: string;
  power: number;
  height: number;
};

// const hero1: { name: string; power: numbe/r; height: number } = {
const hero1: Hero = {
  name: "์ํผ๋งจ",
  power: 100,
  height: 180,
};

// const printHero = (hero: { name: string; power: number; height: number }) => {
const printHero = (a: Hero) => {
  console.log(a.name, a.power);
};

printHero(hero1);
