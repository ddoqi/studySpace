// hash태그에서 hash 떼고 해당 html 내용을 root div에 붙여주는 작업
// 페이지 로드될때 authService에서 필요한 데이터 있으면 해당 데이터 화면에 처음 띄워주는 역할(authService만 그런건가?)
import { authService } from "./firebase.js";
import { getCommentList } from "./pageJs/comment.js";

import{ getBoardList, SearchCate } from "./pageJs/profile.js";

const routes = {
    404: "/pages/404.html",
    "/": "/pages/loginPage.html", 
    loginPage: "/pages/loginPage.html",
    mainPage: "/pages/mainPage.html",
    joinPage: "/pages/joinPage.html",
    ProfilePage : "/pages/ProfilePage.html",
    boardCommentsPage : "/pages/boardComments.html"
  };

   export const handleLocation = async () => {
    let path = window.location.hash.replace("#", "");
    const pathName = window.location.pathname;
      if (pathName === "/index.html") {
        window.history.pushState({}, "", "/");
      }
      if (path.length == 0) {
        path = "/";
      }
   const route = routes[path] || routes[404];
   const html = await fetch(route).then((data) => data.text());
   document.getElementById("root").innerHTML = html;

      
      //handleLocation 안에 써줘야함 !!!!!!!
      if (path === "mainPage") {
        document.getElementById("nickname").textContent =
        authService.currentUser.displayName ?? "닉네임 없음";
        document.getElementById("profileImg").src =
          authService.currentUser.photoURL ?? "../pictures/base1.jpg";
        //comment.js에 있음
        getCommentList();
      }

      // 게시물 작성불러오기 페이지 (ProfilePage에 있긴함)
      if(path==="ProfilePage"){
        console.log('getBoardList가 실행 in router.js')
        //userName
        document.getElementById("userName").textContent = authService.currentUser.displayName ?? "닉네임 없음";
        getBoardList();
        SearchCate();
      }
  }; //handlelocation 닫히는 부분~~~~~~~~~~~~~



  




// if (pathName === "/index.html") {
//   window.history.pushState({}, "", "/");
//   if(authService.user){
//       path="/pages/mainPage.html"
//   }
//   else{
//        path="/pages/loginPage.html"
//   }
// }
// if (path.length == 0) {
//        if(authService.user){
//            path="/pages/mainPage.html"
//    }
//    else{
//            path="/pages/loginPage.html"
//    }
// }