// // ๐ธ Restํ๋ผ๋ฉํฐ ๐ธ
// // ->๋ค๋ฅธ ํ๋ผ๋ฉํฐ ๋งจ ๋ค์ ์จ์ผํ๋ค.
// function ํจ์(...restํ๋ผ๋ฉํฐ: number[]) {
//   //   console.log("...restํ๋ผ๋ฉํฐ", restํ๋ผ๋ฉํฐ);
// }

import { ThemeProvider } from "@emotion/react";

// ํจ์(1, 2, 3, 4, 5, 5, 6);

// //โญ๏ธ ...๋ฅผ array๋ object์ ์ฐ๋ฉด?
// // '๊ดํธ๋ฅผ ๋ฒ๊ฒจ์ฃผ์ธ์' ๋ผ๋ ์๋ฏธ
// let arr = [1, 2, 3];
// let arr2 = [4, 5];
// let arr3 = [...arr, ...arr2];

// // ๐ธ Destructuring ๐ธ
// let ๊ตฌ์กฐ๋ถํดํ ๋น = ["์๋", 100];
// let [๋ณ์1, ๋ณ์2] = ๊ตฌ์กฐ๋ถํดํ ๋น;
// // object์ key๊ฐ์ ๋ง์ถฐ์ฃผ๊ธฐ!
// // let {student,age} ๋ฅผ ํ์ด์ฐ๋ฉด ์๋์ ๊ฐ์
// let { student: student, age: age } = { student: true, age: 20 };
// let ์ต์คต = { student: true, age: 20 };

// // โญ๏ธ ์ฒ์๋ถํฐ ํจ์์ ํ๋ผ๋ฉํฐ ์๋ฆฌ์ '์ต์คต'์ ๋์คํธ๋ญ์ณ๋งํด์ ๊ฐ๋ค์ฐ๊ณ ์ถ์ผ๋ฉด??
// // ์๋ณธ) function ํจ์๋์คํธ๋ญ์ณ๋ง(a, b) {
// function ํจ์๋์คํธ๋ญ์ณ๋ง({ student, age }: { student: boolean; age: number }) {
//   console.log(student, age);
// }

// // ํจ์๋์คํธ๋ญ์ณ๋ง({ student: true, age: 20 });
// ํจ์๋์คํธ๋ญ์ณ๋ง(์ต์คต);

// // (((((((์ ๋ฆฌ)))))))
// // 25๋ฒ๋ผ์ธ์ ํ๋ผ๋ฉํฐ ๋ถ๋ถ์ด let {student,age} ๋ ๋๊ฐ์๊ฑฐ๊ณ 
// // 30๋ฒ๋ผ์ธ์ (์ต์คต)์ด === { student: true, age: 20 }; ๋๊น
// // 25๋ฒ๋ผ์ธ๊ณผ 30๋ฒ ๋ผ์ธ์ ํฉ์น๋ฉด let {student,age}={ student: true, age: 20 }
// // ์๋ฐ ๊ตฌ์กฐ๋ถํดํ ๋น์ผ๋ก student์๋ 'true' , age์๋ 20 ์ด ๋ฝ์์ง ๊ฒ

//---------------------------------------์ฃผ์ ํ๋ฒ ์ ๋ฆฌ-----------------------------------

// function ํจ์(a: string | undefined) {
//   //&&๊ฐ ์์ ๊ฐ์ด falsy(undefined,null,NaN)๋ฉด ์ฒซ๋ฒ์งธ ๋ฑ์ฅํ๋ falsy๊ฐ์ ์ฐพ์์ค
//   // falsy๊ฐ์ด 'a'์์ ๋์ค๊ฒ๋๋ฉด if๋ฌธ์ด ์คํ์ด ์๋๋๊ป
//   if (a && typeof a === "string") {
//   }
// }
// // ๐ธ in ํค์๋ ๐ธ
// // 'in'ํค์๋๋ก ์ฐพ์ผ๋ ค๋ฉด '๋ฐฐํ์ ์ธ ์์ฑ'์ด ์์ด์ผ๋๋ค.
// // ์์  ๋ค๋ฅธ ์์ฑ!!!!์ด ํ์ํจ

// type Fish = { swim: string };
// type Bird = { fly: string };

// function ํจ์(animal: Fish | Bird) {
//   // Fishํ์์ ๊ฒ์ฌํด์ฃผ๋ ํจ์๊ฐ ๋

//   if ("swim" in animal) {
//     animal.swim;
//   }
// }

// // ์ฌ๊ธฐ์๋ 'in'ํค์๋๋ฅผ ์ธ ์ ์์๊น?
// // ์ ๋ต์ No !!!
// // ์ด์  : 'in'ํค์๋๋ฅผ ์ฌ์ฉํ๋ ค๋ฉด ๋ฐฐํ์ ์ธ ์์ฑ์ด ์์ด์ผ ํ๋๋ฐ
// // Car๊ณผ Bike๋ ์์ฃค ๋๊ฐ์ ์์ฑ๋ฐ์ ์์
// // ๊ทธ๋ผ instanceof๋ฅผ ์ฌ์ฉํ  ์ ์์๊น??
// // ์ ๋ต์ No !!!
// // ์ด์ : ๋ถ๋ชจ ํด๋์ค๊ฐ ์์๋
// // โญ๏ธ  ํด๊ฒฐ์ฑ โญ๏ธ
// // ์ด๋ฐ ๊ฒฝ์ฐ ๊ฐ์ ๋ก 'literal type'์ ๋ง๋ค์ด๋๊ธฐ (wheel : '4๊ฐ')

// type Car = {
//   wheel: "4๊ฐ";
//   color: string;
// };

// type Bike = {
//   wheel: "2๊ฐ";
//   color: string;
// };

// function ํจ์(x: Car | Bike) {
//   if (x.wheel === "4๊ฐ") {
//     console.log("x๋ Carํ์์ด์์ผ");
//   }
// }

//-----------------------------------------์ฃผ์ ํ๋ฒ ์ฌ๊ธฐ---------------------------

// //๐ธ ๊ฐ์ฒด์งํฅ์ธ์ด ๐ธ
// //public, private, protected, static
// // ts๋ฅผ ์ฐ๋ฉด ๊ฐ์ฒด์งํฅ์ธ์ด ์ธ ์ ์์

// // ๐๐๐๐ # public ํค์๋ : ์๋ต๊ฐ๋ฅ
// class Publicํค์๋ {
//   // public:์ด name์ ์์ ๋กญ๊ฒ ๊ฐ๋ค์ฐ๊ณ  ์์ ๊ฐ๋ฅ
//   // public์ ์์จ๋ ๋ํดํธ๋ก ์ค์ ๋์ด์์
//   public name = "kim";
//   constructor(a) {
//     this.name = a;
//   }

//   //ํ๋กํ ํ์ํจ์์๋ public๋ถ์ผ ์ ์๋ค.
//   public ์ฌ๊ธฐ์ฐ๋จผํ๋กํ ํ์ํจ์() {}
// }

// // ํ๋์ ์ฐ๋, constructor์ ์ฐ๋ ๋ฌด์จ์ฐจ์ธ๊ฐ์?
// // constructor๋ ํ๋ผ๋ฉํฐ ์ง์ ์ด ๊ฐ๋ฅํ๊ธฐ ๋๋ฌธ์
// // new User('aaa') ์๋ ๊ฒ ์ธ ์ ์์ด์ constructor์ฐ๋ ๊ฒ

// let public์ ์  = new Publicํค์๋("park");
// public์ ์ .name = "์๋ฝ";

// // ๐๐๐๐  # private ํค์๋
// //  class์์์๋ง ์์ , ์ด์ฉ๊ฐ๋ฅ
// class privateํจ์ {
//   name: string = "๋๋ค์๋ํดํธ๊ฒ ๋ค";
//   private familyName: string = "kim";
//   constructor(a) {
//     // ์์ ์๋ 'ํ๋๊ฐ' ๊ฐ๋ค์ฐ๊ณ ์ถ์ผ๋ฉด this. ์ ๋ถ์ฌ์ค์ผ ํ๋ค.
//     this.name = this.familyName + a;
//   }

//   ๋น์์ด๋ฆ๋ณ๊ฒฝํจ์(x) {
//     this.familyName = x;
//   }
// }

// let private์ ์  = new privateํจ์("๋๋ฅ");
// // private์ ์ .familyName;
// // ์๋ฌ๊ฐ ๋ฌ๋ค.
// // ์ด์  : private๋ฅผ ๋ถ์ด๋ฉด class { } ์์์๋ง ์์ ์ด ๊ฐ๋ฅํ๋ค.
// console.log("private์ ์ ", private์ ์ );

// // ๋น์์ํฉ์ผ๋ก private๋ฅผ ํจ์ ๋ฐ์์ ๋ฐ๊พธ๊ณ  ์ถ๋ค๋ฉด??
// // ๋ฏธ๋ฆฌ class์์ '๋น์๋ณ๊ฒฝํจ์'๋ฅผ ๋ง๋ค์ด๋๊ณ  ์จ์ฃผ๋ฉด ๋

// private์ ์ .๋น์์ด๋ฆ๋ณ๊ฒฝํจ์("๋น์์ด๋ฆ");
// console.log("private์ ์ ", private์ ์ );

// // ๐๐๐๐ constructor์ public ๋ฃ์ด์ ์ฝ๋ ์ถ์ฝํ๊ธฐ
// // โญ๏ธ ์ด๋ ๊ฒ, constructor์ ํ๋ผ๋ฉํฐ์ public '์ด๋ฆ' ์ ๋ถ์ฌ์ฃผ๋ฉด
// // ์๋์ผ๋ก ์์์ ์์ฑ '์ด๋ฆ'์ ๊ธฐ์ํด์ฃผ์ธ์ ๋ผ๋ ๋ช๋ น์ด ๋๋ค.
// class ์ถ์ฝํด๋ณด์ {
//   constructor(public name: string) {}
// }

// let ์ถ์ฝ์์ = new ์ถ์ฝํด๋ณด์("name๊ฐ");
// console.log("์ถ์ฝ์์", ์ถ์ฝ์์);

//---------------------------------------์ฃผ์ ํ๋ฒ ์ฌ๊ธฐ------------------------------

// class์์ Private์ผ๋ก ๋ถ์ด๋ฉด, extendsํ ์์๋ค์ด ์กฐ์ํ  ์๊ฐ ์๋ค.
class User {
  private x = 10;
}

class NewUser extends User {}

let ์ฌ๋ = new NewUser();
// ์ฌ๋.x = 20;   <----------- ์๋ฌ๋จ
// class์์ private์ ๋ถ์ฌ์ฃผ๋ฉด, ์์๋ค์ ๊ฐ๋ค ๋ณํํ  ์๊ฐ ์์

// ๐๐๐๐ # protected
// private์ ํ์ฅํ์ผ๋ก private๋ณด๋ค ์ข๋ ์ ์ํ ๋ฒ์ 
// protected๋ ๋ถ๋ชจclass๋ฅผ ํ์ฅํ ์์๋ค๋ ๋ณํใใ
class ProtectedUser {
  protected x = 10;
}

class ProtectedNewUser extends ProtectedUser {
  // protected๋ ๋ถ๋ชจclass๋ฅผ ํ์ฅํ ์์์์์ x๋ฅผ ๋ณ๊ฒฝ๊ฐ๋ฅํ ๊ฒ ํ์ธ
  doThis() {
    this.x = 20;
  }
}

// ๐๐๐๐ # static
// ๋ถ๋ชจclass๋ง ๊ฐ๋ค์ธ ์ ์์(์์์๊ฒ ์๋ฌผ๋ ค์ค)
// but, ๋ถ๋ชจclass๋ฅผ extendsํ๋ฉด ๋ฌผ๋ ค์ค
// static์ private๊ณผ protected์ public๊ณผ ๋์์ ์ธ ์ ์๋ค!
class StaticUser {
  private static x = 10;
  y = 20;
}

let Static์์ = new StaticUser();
console.log(Static์์.x); //๊ฒฐ๊ณผ๊ฐ : undefined

class StaticExtends์์ extends StaticUser {}
console.log("StaticExtends์์์ x๊ฐ ์๋?", StaticExtends์์.x);

//
class ์์ฉํ๊ธฐ {
  // static์ ๋ถ์ด๋ฉด ์์๋ค์ด ๋ชป๋ฌผ๋ ค๋ฐ์
  // static์ ๋ถ๋ชจ๋ฅผ ํตํด์๋ง ๋ฌผ๋ ค๋ฐ์ผ๋ 'this'ํค์๋๋ก ๋ชป๋ฌผ๋ ค์ค
  static skill = "js";
  intro = ์์ฉํ๊ธฐ.skill + "์ ๋ฌธ๊ฐ์๋๋ค.";
}

let ์ฒ ์ = new ์์ฉํ๊ธฐ();
console.log(์ฒ ์);

// ์ด ์ดํ๋ถํฐ๋ ts์ ๋ฌธ๊ฐ์๋๋ค ์ด๊ธธ ๋ฐ๋
์์ฉํ๊ธฐ.skill = "ts";

let ๋ฏผ์ = new ์์ฉํ๊ธฐ();
console.log(๋ฏผ์);

// //๐ธ namespace ๐ธ
// ์๋ ์, import, export๊ฐ ์์ด์
// ์ด๋ tsํ์ผ์ ํ์๋ณ์์ธ์ง ์ฐพ์์๊ฐ ์์์ผ๋
// ์ด๋ ๊ฒ namespace๋ผ๋ ํค์๋๋ฅผ ํ์ฉํด์ ์จ์ฃผ์์๋ค.
// namespace ๊ธฐ๋ฅ? ํ์๋ณ์ ์จ๊ธฐ๊ธฐ ๋ผ๊ณ  ๋ณด๋ฉด ๋
namespace ๋ค์์คํ์ด์ค {
  export type Name = string;
}

// ์๋  ํ์ค ๋ฌธ๋ฒ์ (import, export ์์๋)
///<reference path="./a.ts"/>
// ๋ค์์คํ์ด์ค.Name ์ด๋ฐ์์ผ๋ก ์ผ์์
