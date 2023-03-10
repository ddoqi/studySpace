import { authService } from "./firebase.js";
import { handleLocation, route } from "./router.js";
import { openModal, closeModal, dropdown, showMenu, modaldropdown, modalshowMenu } from "./modal.js";

//๐ผ๐ผ๐ผ๐ผ๐ผ๐ผ๐ผ๐ผ profile_update ํ์ผ๊ฒฝ๋ก ์์  ๐ผ๐ผ๐ผ๐ผ๐ผ๐ผ๐ผ
import { pu_openModal, pu_closeModal, feed_openModal, feed_closeModal} from "./pageJs/profile_update.js";

// import { swiper } from "./keyword.js";

//๋ค๊ฒฝ ๋ฐฑ์๋ ์ฐ๊ฒฐ
import { socialLogin } from "./pageJs/login.js";
import {
  moveJoinPage,
  loginAction,
  joinAction,
  logoutAction,
} from "./pageJs/login.js";
import {
  changeProfile,
  onFileChange,
  DeletePhoto,
} from "./pageJs/profile.js";

//๐ผ๐ผ๐ผ๐ผ๐ผ๐ผ๐ผ๐ผ profile_update ํ์ผ๊ฒฝ๋ก ์์  --> ์๋ window ์ ์ญ๊ฐ์ฒด ๋ง๋ค๊ธฐ ๐ผ๐ผ๐ผ๐ผ๐ผ๐ผ๐ผ
import { saveTargetComments, targetCommentsSearch} from "./pageJs/profile_update.js";


// ์ฑํ ๋ฐฑ์๋ ์ฐ๊ฒฐ
// import { handleAuth, onToggle, logout,  } from "./pageJs/login.js";
import { /* goToProfile, */ goToMyPage} from "./router.js";
import { save_post, update_post, onEditing, delete_post, seeMyPost} from "./pageJs/new_main.js";
import{ search_post } from "./pageJs/new_mypage.js";

// hash url ๋ณ๊ฒฝ ์ ์ฒ๋ฆฌ
window.addEventListener("hashchange", handleLocation);

// ์ฒซ ๋๋ฉ ๋๋ ์๋ก๊ณ ์นจ ์ ์ฒ๋ฆฌ
document.addEventListener("DOMContentLoaded", () => {
  // ๋ก๊ทธ์ธ ์ํ ๋ชจ๋ํฐ๋ง
  authService.onAuthStateChanged((user) => {
    // Firebase ์ฐ๊ฒฐ๋๋ฉด ํ๋ฉด ํ์
    // user === authService.currentUser ์ ๊ฐ์ ๊ฐ

    //๋ค๊ฒฝ ๋ฐฑ์๋ ์ถ๊ฐํ๊ฒ!!
    handleLocation();
    console.log('hash๊ฐ ๋๋์ฒด ๋ญ๋?',hash)
    const hash = window.location.hash;
    if (user) {
      if (hash === ""|| hash === "login") {
        window.location.replace("#main");
      }
      window.location.replace("#main");
    }
    // user๊ฐ ์๋๋ผ๋ฉด router.js์์ ์ค์ ํ ๊ณ ๋๋ก ๊ฐ๋๊น user๊ฐ ์๋ ์ฌ๋์ loginํ์ด์ง๋ฐ์ ๋ชป๋ง๋๋ค.
    else {
      if (hash !== "") {
        window.location.replace("");
      }
    }
  });
});

// ์ ์ญ ํจ์ ๋ฆฌ์คํธ
window.route = route;
window.openModal = openModal;
window.closeModal = closeModal;
window.dropdown = dropdown;
window.modaldropdown = modaldropdown;
window.showMenu = showMenu;
window.pu_openModal = pu_openModal;
window.pu_closeModal = pu_closeModal;
window.modalshowMenu = modalshowMenu;
window.feed_openModal = feed_openModal;
window.feed_closeModal = feed_closeModal;
// window.swiper = swiper;

//๋ค๊ฒฝ ๋ฐฑ์๋ ์ฐ๊ฒฐ
window.socialLogin=socialLogin;
window.loginAction=loginAction;
window.moveJoinPage=moveJoinPage;
window.joinAction=joinAction;
window.logoutAction=logoutAction;
window.changeProfile=changeProfile;
window.onFileChange=onFileChange;
window.DeletePhoto=DeletePhoto;

//๐ผ๐ผ๐ผ๐ผ๐ผ๐ผ๐ผ๐ผ window ๊ฐ์ฒด๋ง๋ค๊ธฐ ๐ผ๐ผ๐ผ๐ผ๐ผ๐ผ๐ผ
window.saveTargetComments=saveTargetComments;
window.targetCommentsSearch=targetCommentsSearch;


// ์ฑํ ๋ฐฑ์๋ ์ฐ๊ฒฐ
// window.goToProfile = goToProfile;
window.socialLogin = socialLogin;
window.onFileChange = onFileChange;
window.changeProfile = changeProfile;
window.save_post = save_post;
window.update_post = update_post;
window.onEditing = onEditing;
window.delete_post = delete_post;
window.seeMyPost = seeMyPost;
window.goToMyPage = goToMyPage;
window.search_post = search_post;