import {
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  orderBy,
  query,
  getDocs,
  where,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { dbService, authService } from "../firebase.js";


// ๊ธ ๋ฑ๋ก
export const save_post = async (event) => {
  const post = document.getElementById("post");
  // ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธํค์๋ ๋ฐ๋ ค์ค๊ธฐ(์์)๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ 
  const jjintest=document.getElementsByClassName("modal_dropbtn_content");
  const jjinmack=jjintest[0].innerHTML;
  console.log('jjintest:',jjintest[0].innerHTML)
  // ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธํค์๋ ๋ฐ๋ ค์ค๊ธฐ(๋)๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ 
  const { uid, photoURL, displayName } = authService.currentUser;
  try {
    /* try=default catch ์์ธ๋ฐ์์ ์๋ฌ์ฒ๋ฆฌ */
    const word = post.value.replace(/\s| /gi, ""); /* ๊ณต๋ฐฑ ๋๋ ๋ชจ๋  ํญ์ ""์ผ๋ก ๋์ฒด */
    if (word.length) { /* ๊ณต๋ฐฑ๊ณผ ๋ชจ๋  ํญ์ ์ ์ธํ value๊ฐ์ด ์ฐธ์ด๋ฉด(0์ด ์๋๋ฉด) */
      await addDoc(collection(dbService, "posts"), {
        text: post.value.replace(/(\n|\r\n)/g, "<br>").replace(/ /g, "&nbsp"),
        createdAt: Date.now(),
        creatorId: uid,
        profileImg: photoURL,
        nickname: displayName,
        // ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธํค์๋ ๋ฐ๋ ค์ค๊ธฐ(์์)๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ 
        keyword:jjinmack,
        // ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธํค์๋ ๋ฐ๋ ค์ค๊ธฐ(๋)๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ 
        // ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ์๋ 135๋ฒ๋ผ์ธ๋ ์์  ํ์๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ๐ธ 
      });
      post.value = "";
      alert('๊ฒ์๋ฌผ ์ ์ง์ด ์๋ฃ๋์์ต๋๋ค!>_<')
      getpostList();
    } else {
      alert("๋ด์ฉ์ ์๋ ฅํ์ธ์");
    }
  } catch (error) {
    alert(error);
    console.log("error in addDoc:", error);
  }
};

// ์์ ๋ฒํผ ํด๋ฆญ
export const onEditing = (event) => {
  event.preventDefault();
  const udBtns = document.querySelectorAll(".editBtn, .deleteBtn");
  udBtns.forEach((udBtn) => (udBtn.disabled = "true"));

  const cardBody =
    event.target.parentNode.parentNode; /* event.target์ ์์ฑ๊ฐ์ ๊ฐ์ ธ์จ๋ค */ /* 138. div_mycards */
  const postText = cardBody.children[0].children[0]; /* p_postText */
  const postInputP = cardBody.children[0].children[1]; /* p_noDisplay */

  postText.classList.add("noDisplay"); /* element.classList.add('ํด๋์ค๋ช') : ์์์ ํด๋์ค ์ถ๊ฐ */
  postInputP.classList.add("d-flex");
  postInputP.classList.remove("noDisplay"); /* noDisplay = display:none; */
  postInputP.children[0].focus();
};

// ๊ธ์์ 
export const update_post = async (event) => {
  event.preventDefault();
  const newpost = event.target.parentNode.children[0].value;
  const id = event.target.parentNode.id;
  const parentNode = event.target.parentNode.parentNode;
  const postText = parentNode.children[0];
  postText.classList.remove("noDisplay");
  const postInputP = parentNode.children[1];
  postInputP.classList.remove("d-flex");
  postInputP.classList.add("noDisplay");
  const postRef = doc(dbService, "posts", id);
  try {
    const word = newpost.replace(/\s| /gi, ""); /* ๊ณต๋ฐฑ ๋๋ ๋ชจ๋  ํญ์ ""์ผ๋ก ๋์ฒด */
    if (word.length) {  /* ๊ณต๋ฐฑ๊ณผ ๋ชจ๋  ํญ์ ์ ์ธํ value๊ฐ์ด ์ฐธ์ด๋ฉด(0์ด ์๋๋ฉด) */
      await updateDoc(postRef, { text: newpost.replace(/(\n|\r\n)/g, "<br>").replace(/ /g, "&nbsp") }); /* enter์ space๊น์ง ํํ๋๊ฒ */
    } else {
      alert("๋ด์ฉ์ ์๋ ฅํ์ธ์");
    }
  } catch (error) {
    alert(error);
  }
};

// ๊ธ์ญ์ 
export const delete_post = async (event) => {
  event.preventDefault();
  const id = event.target.name;
  const ok = window.confirm("ํด๋น ์์๊ธ์ ์ ๋ง ์ญ์ ํ์๊ฒ ์ต๋๊น?");
  if (ok) {
    try {
      await deleteDoc(doc(dbService, "posts", id));
      alert('๊ธ ์ญ์ ๊ฐ ์๋ฃ๋์์ต๋๋ค!')
      // getpostList();
    } catch (error) {
      alert(error);
    }
  }
};

// ๊ธ๋ชฉ๋ก
export const getpostList = async () => {
  let cmtObjList = [];
  const q = query(collection(dbService, "posts"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const postObj = {
      id: doc.id,
      ...doc.data(),
    };
    cmtObjList.push(postObj);
  });
  const commnetList = document.getElementById("post-list");
  const currentUid = authService.currentUser.uid;
  commnetList.innerHTML = "";
  cmtObjList.forEach((cmtObj) => {
    const isOwner = currentUid === cmtObj.creatorId;
    const temp_html =         
        `<div id="post_wrap" onclick="feed_openModal(${cmtObj.createdAt})">
            <div class="post_top_wrap">
              <div class="profile">
                <img class="cmtImg" width="50px" height="50px" src="${cmtObj.profileImg}" alt="profileImg" />
              </div>
              <a class="nickname" href="#" title="nickname" target="_blank"><span>${cmtObj.nickname ?? "๋๋ค์ ์์"}</span></a>
              <div class="category_wrap">
                <p class="category">${cmtObj.keyword}</p>
              </div>
            </div>
            <div class="text_box">${cmtObj.text}</div>
            <p id="${cmtObj.id}" class="noDisplay">
            <div class="cmtAt">${new Date(cmtObj.createdAt).toString().slice(0, 25)}</div>
            <div class="${isOwner ? "updateBtns" : "noDisplay"}">
              <div class="revise_wrap hide">
                  <input type="submit" value="์์ " class="edit" onclick="onEditing(event)"/>
                  <input type="submit" value="์ญ์ " class="cut" name="${cmtObj.id}" onclick="delete_post(event)"/>
              </div>
            </div>
          </div>
        `;


    const div = document.createElement("div");
    div.classList.add("mycards");
    div.innerHTML = temp_html;
    commnetList.appendChild(div);
  });
};

// ๋ด๊ฐ ์ด๊ธ ๋ณด๊ธฐ
export  const seeMyPost = async() => {
  let cmtObjList = [];
  const q = query(collection(dbService, "posts"), where("creatorId", "==", authService.currentUser.uid), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    const postObj = {
      id: doc.id,
      ...doc.data(),
    };
    cmtObjList.push(postObj);
  });

  const commnetList = document.getElementById("post-list");
  const currentUid = authService.currentUser.uid;
  commnetList.innerHTML = "";
  cmtObjList.forEach(cmtObj => {
    const isOwner = currentUid === cmtObj.creatorId;
    const temp_html = 
    `<form method="get" action="" class="my_post flex">
    <div id="post_wrap" onclick="feed_openModal()">
      <div class="post_top_wrap">
        <div class="profile">
          <img class="cmtImg" width="50px" height="50px" src="${cmtObj.profileImg}" alt="profileImg" />
          <a class="nickname" href="#" title="nickname" target="_blank"><span>${cmtObj.nickname ?? "๋๋ค์ ์์"}</span></a>
        </div>
        <div class="category_wrap">
          <p class="category">#hashTag</p>
        </div>
      </div>
      <div class="text_box">${cmtObj.text}</div>
      <p id="${cmtObj.id}" class="noDisplay">
      <div class="cmtAt">${new Date(cmtObj.createdAt).toString().slice(0, 25)}</div>
      <div class="${isOwner ? "updateBtns" : "noDisplay"}">
        <div class="revise_wrap hide">
            <input type="submit" value="์์ " class="edit" onclick="onEditing(event)"/>
            <input type="submit" value="์ญ์ " class="cut" name="${cmtObj.id}" onclick="delete_post(event)"/>
        </div>
      </div>
    </div>
  </form>`;
    const div = document.createElement("div");
    div.classList.add("mycards");
    div.innerHTML = temp_html;
    commnetList.appendChild(div);
  });
};

// ๊ฒ์ํ ๊ธ๋ชฉ๋ก
export const search_post = async () => {
  let cmtObjList = [];
  const q = query(collection(dbService, "posts"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const postObj = {
      id: doc.id,
      ...doc.data(),
    };
    cmtObjList.push(postObj);
  });
  const searchWord = document.getElementById('search_contents').value;
  const commnetList = document.getElementById("filtering-list");
  const currentUid = authService.currentUser.uid;
  commnetList.innerHTML = "";

  const arr = cmtObjList.filter(a => a.text.includes(searchWord)); /* filter๋ฉ์๋๋ก firebase์ text๋ฅผ ๋ฐฐ์ด๋ก ๋ณํ */

  arr.forEach((cmtObj) => {
    const isOwner = currentUid === cmtObj.creatorId; /* ์ฌ์ฉ์์ ๋ณด์ creatorId๋ฅผ ๋์ */
    const temp_html = 
      `<form method="get" action="" class="my_post flex">
      <div id="post_wrap" onclick="feed_openModal()">
        <div class="post_top_wrap">
          <div class="profile">
            <img class="cmtImg" width="50px" height="50px" src="${cmtObj.profileImg}" alt="profileImg" />
            <a class="nickname" href="#" title="nickname" target="_blank"><span>${cmtObj.nickname ?? "๋๋ค์ ์์"}</span></a>
          </div>
          <div class="category_wrap">
            <p class="category">#hashTag</p>
          </div>
        </div>
        <div class="text_box">${cmtObj.text}</div>
        <p id="${cmtObj.id}" class="noDisplay">
        <div class="cmtAt">${new Date(cmtObj.createdAt).toString().slice(0, 25)}</div>
        <div class="${isOwner ? "updateBtns" : "noDisplay"}">
          <div class="revise_wrap hide">
              <input type="submit" value="์์ " class="edit" onclick="onEditing(event)"/>
              <input type="submit" value="์ญ์ " class="cut" name="${cmtObj.id}" onclick="delete_post(event)"/>
          </div>
        </div>
      </div>
    </form>`;
    
    const div = document.createElement("div");
    div.classList.add("mycardss");
    div.innerHTML = temp_html;
    commnetList.appendChild(div);
  });
};