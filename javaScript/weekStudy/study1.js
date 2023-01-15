var nunu = {
  q: "consume",
  w: "snowball",
};

var garen = {
  q: "strike",
  w: "courage",
};

// class는 object 찍어내는 기계 그 이상 그 이하도 아님
// 비슷한 object 뽑아내는 기계일뿐

//옛날엔 class라는 개념이 없어서 function으로 씀
//this가 나온 이상 그냥 함수가 아니라 class가 됌
function 기계(x = "x기본값", y = "y기본값") {
  // 새로 생성된 인스턴스의 q에 consume을 추가해주시요
  this.q = x;
  // 새로 생성된 인스턴스의 w에 snowball을 추가해주시요
  this.w = y;
}
//this는 기계로부터 생성되는 오브젝트들을 뜻한다 => 인스턴스

//기계에서 object를 뽑아내는 방법 'new'
new 기계();
//이렇게 하면 그 자리에 뾰로롱하고 오브젝트가 남는다.
var nunu = new 기계();
console.log("nunu:", nunu);
console.log("nunu:", nunu.q);

var garen = new 기계("가렌q스킬", "가렌w스킬");
console.log("garen", garen);
