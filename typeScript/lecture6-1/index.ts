// π‘ μΈν°νμ΄μ€ : ν΄λμ€λ₯Ό κ΅¬ννκΈ°μ μ νμν λ©μλλ₯Ό μ μνλ μ©λ π‘
// νμμ€ν¬λ¦½νΈμμλ μ’ λ λ€μν κ²λ€μ μ μνλ€.

import { text } from "express";

// νμ μΌλΌμ΄μ΄μ€λ κ΅¬μ‘°λ λΉμ·ν¨
// 1)κΈ°λ³Έ μμ±
interface Person {
  name: string;
  age: number;
}

const person1: Person = { name: "js", age: 20 };
const person2: Person = { name: "js", age: 18 };

// 2)μ ν μμ±
interface Person0 {
  name: string;
  age?: number;
}
const person3: Person0 = { name: "js" };

//Read Only μμ±
// κ°μ²΄λ₯Ό μ²μ μμ±ν λλ§ κ°μ ν λΉν  μ μκ³ , κ·Έ μ΄νμλ ν λΉν  μ μμ

interface Person5 {
  readonly name: string;
  age?: number;
}

const person10: Person5 = { name: "λλ₯" };
// person10.name="λ΄λ₯" //μλ κ² νλ©΄ μλ¬λ¨, λ€μ κ° μ¬ν λΉ λͺ»ν¨

// ReadonlyArray (μ½κΈ°μ μ©λ°°μ΄)
let λ¦¬λμ¨λ¦¬λ°°μ΄: ReadonlyArray<number> = [1, 2, 3];
// λ¦¬λμ¨λ¦¬λ°°μ΄.push(4); //μλ κ² λ£μΌλ €κ³  νλ©΄ μλ¬λ¨

// π‘ μΈλ±μ€νμπ‘
// μΈν°νμ΄μ€μμ μμ±μ μ΄λ¦μ κ΅¬μ²΄μ μΌλ‘ μ μνμ§ μκ³ 
// μ΄λ€ κ°μ νμλ§ μ μν΄λμκ²

interface μΈλ±μ€νμ {
  // keyλ λ¬΄μ‘°κ±΄ stringμλλ©΄ numberλ§ λ€μ΄μ¬ μ μλ€.
  name: string;
  //  μΈλ±μ€ keyμλ stringμ΄ λ€μ΄μ€κ³ , valueμλ numberκ° λ€μ΄μ¬ μ μλ€.
  [key: string]: string | number;
}

const p1: μΈλ±μ€νμ = { name: "js", birthDay: "λ΄μμΌ", age: 20 };

// μΈν°νμ΄μ€μ ν¨μνμ
interface μΈν°νμ΄μ€ν¨μμ μ {
  (name: string, age: number): string;
}

// type νμ = (name : string,age:number) => string
// μμ λμΌν κ²

const getNameAndAge: μΈν°νμ΄μ€ν¨μμ μ = function (name, age) {
  return `name : ${name}, age : ${age}`;
};

//π‘ μ λ€λ¦­ π‘
// < > | T
function getText<T>(text: T): T {
  // Tμ stringμ΄ λ€μ΄κ°
  return text;
}
// getText<string>("hi");
// getText("hi");  <-- μ΄λ κ² μλ΅λ κ°λ₯νλ€.
getText<number>(10);
getText<boolean>(true);

// function getItemArray(arr: any[], index: number): any {
function getItemArray<T>(arr: T[], index: number): T {
  return arr[index];
}

// function pushItemArray(arr: any[], item: any): void {
function pushItemArray<T>(arr: T[], item: T): void {
  arr.push(item);
}

const λμ€νΈλ§λ°°μ΄μ΄μ = ["js", "react"];
const λμ«μλ°°μ΄μ΄μ = [1, 2, 3, 4, 5];

getItemArray(λμ€νΈλ§λ°°μ΄μ΄μ, 0);
pushItemArray(λμ€νΈλ§λ°°μ΄μ΄μ, "λ νΈμ¬ν΄μ£΅");

getItemArray(λμ«μλ°°μ΄μ΄μ, 0);
pushItemArray(λμ«μλ°°μ΄μ΄μ, 3);
// μ μ½λκ° μλ¬λ μ΄μ κ° λ¨Έμ§?
// μ΄μ  : λμ«μλ°°μ΄μ΄μ λ°°μ΄μ μ«μarrayμκΈ°λλ¬Έ!!!

// μλμ²λΌ μ½λλ₯Ό μ§λ©΄ μλ¬κ° λλ€.
// μ΄μ  : Inputνμμ΄ λ°°μ΄μ΄λ stringμΌλ‘ λ€μ΄μ€λ©΄ lengthλ₯Ό μΈ μ μμ§λ§
// νμμ€ν¬λ¦½νΈλ μ  Tμ inputμ΄ μ΄λ€ νμμ΄ λ€μ΄μ¬μ§λ₯Ό λͺ¨λ₯΄κΈ°λλ¬Έ!!
// function printOut<T>(input: T): T {
function printOut<T>(input: T[]): T[] {
  // λ°λΌμ Tλ€μ μ΄λ κ² λ°°μ΄[]μ λ£μ΄μ£Όλ©΄, λ¬΄μ‘°κ±΄ λ°°μ΄μ lengthκ° μμ΄μ μλ¬κ° μλ¨
  console.log(input.length);
  return input;
}

printOut([12, 3, 4]);

// μ λλ¦­ μ μ½ μ‘°κ±΄
interface Lengthwise {
  length: number;
}
//μ΄λ κ² μΈν°νμ΄μ€ νμ₯μ ν κ²½μ°μ Tλ Lengthwiseμ lengthλ₯Ό κ°μ§κ³  μμ΄μ
// μλ¬κ° λμ§ μλκ²μ λ³Ό μ μμ
function μ λλ¦­μ μ½μ‘°κ±΄<T extends Lengthwise>(input: T) {
  console.log(input.length);
  return input;
}
