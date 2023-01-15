// main.js --> 프로젝트의 모든 메소드들을 어셈블하고 그걸 window 전역 객체로 만들어 뿌려주는 역할
// window.addEventListener("hashchange", handleLocation); --> hashchange가 발생하면 hashchange메소드(router.js)를 실행시켜주기
// document.addEventListener("DOMContentLoaded", function () --> loaded가 되면 실행시킬 작업
import { handleLocation } from "./router.js";
import { authService } from "./firebase.js";
import { moveJoinPage,loginAction,joinAction,logoutAction } from "./pageJs/login.js";

//getCommentList는 왜 Import 안해주냥
import { save_comment, onEditing , update_comment, delete_comment} from "./pageJs/comment.js";

import { moveProfilePage,changeProfile,onFileChange } from "./pageJs/profile.js";

import {getBoardList,save_board,SearchCate } from "./pageJs/profile.js";

//-----------------------------------------------------------------
window.addEventListener("hashchange", handleLocation);
document.addEventListener("DOMContentLoaded", function () {
      authService.onAuthStateChanged((user) => {
        handleLocation(); 
        const hash = window.location.hash;
        
        if (user) {   
          if (hash === "" || hash ==="/index.html") {
            window.location.replace("#mainPage");
          }
          window.location.replace("#mainPage");
        } 
          // user가 아니라면 router.js에서 설정한 고대로~가니 login페이지밖에 못만난다.
          else {
          if (hash !== "") {
            window.location.replace("");
          }
        }
      });
    });

  window.moveJoinPage = moveJoinPage;
  window.loginAction = loginAction;
  window.joinAction = joinAction;
  window.logoutAction = logoutAction;

  window.save_comment = save_comment;
  window.onEditing = onEditing;
  window.update_comment = update_comment;
  window.delete_comment = delete_comment;


  window.moveProfilePage = moveProfilePage;
  window.changeProfile=changeProfile;
  window.onFileChange=onFileChange;

  // //getBoardList,save_board
  window.getBoardList=getBoardList;
  window.save_board=save_board;
  window.SearchCate=SearchCate;