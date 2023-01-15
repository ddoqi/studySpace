
import { authService } from "./firebase.js";

export const route = (event) => {
  event.preventDefault();
  console.log("event.target.hash:", event.target.hash);
  window.location.hash = event.target.hash;
};

const routes = {
  "/": "/page/keyword.html",
  header: "/page/header.html",
  sidebar: "/page/sidebar.html",
  login: "/page/login.html",
  join: "/page/join.html",
  main: "/page/main.html",
  mypage: "/page/mypage.html",
  comment: "/page/comment.html",
  footer: "/page/footer.html",
  404: "/page/404.html",
};

export const handleLocation = async () => {
  let path = window.location.hash.replace("#", ""); // #login 을 login 으로 저장  path = login 상태
  const pathName = window.location.pathname;
  if (pathName === "/index.html") {
    window.history.pushState({}, "", "/");
  }
  if (path.length == 0) {
    path = "/";
  }
  //이 부분 바꾼거 

  // "http://example.com/"가 아니라 도메인 뒤에 / 없이 "http://example.com" 으로 나오는 경우
  const route = routes[path] || routes[404]; // truthy 하면 route[path], falsy 하면 routes[404]

  if (path === "login" || path === "join" || path === "/") {
    const pagehtml = await fetch(route).then((data) => data.text());
    document.getElementById("index_page").innerHTML = pagehtml;
    document.getElementById("index_header").innerHTML = " ";
    document.getElementById("index_sidebar").innerHTML = " ";
    document.getElementById("index_footer").innerHTML = " ";

  }
  // main page 접속할 때
  if (path === "main"){
    const yheader = routes["header"] || routes[404];
    const ysidebar = routes["sidebar"] || routes[404];
    const yfooter = routes["footer"] || routes[404];


    const headerhtml = await fetch(yheader).then((data) => data.text());
    const sidebarhtml = await fetch(ysidebar).then((data) => data.text());
    const footerhtml = await fetch(yfooter).then((data) => data.text());

    const pagehtml = await fetch(route).then((data) => data.text());

    document.getElementById("index_header").innerHTML = headerhtml;
    document.getElementById("index_sidebar").innerHTML = sidebarhtml;
    document.getElementById("index_page").innerHTML = pagehtml;
    document.getElementById("index_footer").innerHTML = footerhtml;

    //메인페이지 사진,닉네임 변경 부분
    //메인페이지의 nickname을 nickname1이라고 변경
    document.getElementById("nickname1").textContent =
    authService.currentUser.displayName ?? "닉네임 없음";
    document.getElementById("profileImg").src =
    authService.currentUser.photoURL ?? "../image/test1.jpg";

    //모달창 프로필 사진, 닉네임 변경
    //profileView :모달창 사진
    //nickname : 모달창 닉네임
    document.getElementById("nickname").textContent =
    authService.currentUser.displayName ?? "닉네임 없음";

    document.getElementById("profileView").src =
    authService.currentUser.photoURL ?? "../image/test1.jpg";

  }

  if (path === "mypage" || path === "comment"){
    const yfooter = routes["footer"] || routes[404];
    const yheader = routes["header"] || routes[404];


    const headerhtml = await fetch(yheader).then((data) => data.text());
    const pagehtml = await fetch(route).then((data) => data.text());
    const footerhtml = await fetch(yfooter).then((data) => data.text());


    document.getElementById("index_header").innerHTML = headerhtml;
    document.getElementById("index_sidebar").innerHTML = " ";
    document.getElementById("index_page").innerHTML = pagehtml;
    document.getElementById("index_footer").innerHTML = footerhtml;

  }


  if (path === "/") {
    const swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }
};

// path 경로에 따라 <head> <title> 해당 페이지에 맞게 변경되게끔 하기 </title></head>
