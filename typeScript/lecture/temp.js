//target : ex2016 으로 설정했을때
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// module이 commonjs일때는 require로 가져왔는데
const hello_1 = require("./hello");
const str = "ts";
const hi = () => {
  console.log(`hello ${str}`);
};
(0, hello_1.hellofunc)();
