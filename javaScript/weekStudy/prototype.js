function 기계(x = "x기본값", y = "y기본값") {
  this.q = x;
  this.w = y;
}

// 콘솔창에 기계.prototype이라고 찍어보면
// 우리도 모르게 비밀공간이 생겨있음
// prototype은 '유전자'라고 생각하면 됌
기계.prototype.name = "kim";
//이 유전자에 먼가를 추가하면, 그 아래 자식들도 다 갖고있음

var nunu = new 기계("달리기", "말하기");
console.log("nunu", nunu);
// 실제로 nunu를 찍어보면 결과값은
// { q: '달리기', w: '말하기' } 이렇게 뜨지만
console.log("nunu.name", nunu.name);
//이렇게 nunu.name을 치면 유전자속에(프로토타입) 뿅 name을 발견할 수 잇음
// 이유? 자바스크립트의 작동원리때문이다
// 자바스크립트가 옵줵에서 자료 뽑을때 순서
// 1.직접 자료를 갖고있으면 그걸 출력
// 2.없으면 부모유전자까지 뒤진다.
// 3. 없으면 부모의 부모까지 가버림

이 프로토타입을 이용해서
만약 내가 모든 array자료에서 자주쓰고싶은 함수가 생기면??

function 특정함수() {};

Array.prototype.함수 = 특정함수;
console.log("Array.prototype.함수", Array.prototype.함수);
