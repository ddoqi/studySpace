// module이 es2015일때는 그냥 import문법을 쓴 것을 볼 수 있다.
import { hellofunc } from "./hello";
var str = "ts";
var hi = function () {
  console.log("hello ".concat(str));
};
hellofunc();
