// 🌸  d.ts? 🌸
// 프로젝트에서 사용하는 타입들을 쭉 정리하는 용도이다.
// 말그대로 타입 정의 넣어놓는 파일
export type Age = number;

export interface Person {
  name: string;
}

// 사용할땐 export해서 사용
// tsconfig.json파일에서
// "declaration":true
// 를 설정해주면 ts파일마다 d.ts 파일이 자동생성된다고 함!!!
// 홀리몰리 ㅇㅂㅇ~~~~
