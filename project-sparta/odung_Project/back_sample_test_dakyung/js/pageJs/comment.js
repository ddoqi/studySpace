import {
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  collection,
  orderBy,
  query,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { dbService, authService } from "../firebase.js";

// 댓글 저장하는 함수
export const save_comment = async (event) => {
  event.preventDefault();
  const comment = document.getElementById("comment");

  // authService.currentUser에 담겨있는 각각의  uid, photoURL, displayName 값들을 각 객체를 생성해서 넣어준것
  // 만약 profile에서 데이터를 안넣었으면, uid 빼고는 다 디폴트값이 들어가겠지?
  const { uid, photoURL, displayName } = authService.currentUser;

  try {
    // addDoc은 db에 저장하는 함수이다.
    // 배열형태로 만들어서 db에 저장해주네
    await addDoc(collection(dbService, "comments"), {
      text: comment.value,
      createdAt: Date.now(),
      // 화면에 실제로 uid가 나타나지는 않음
      //creatorID에 uid넣는 이유 : 수정/삭제를 해당 uid만 삭제할 수 있도록(이거 getCommentList에 보면 일치하는 애만 보이는 클래스 띄우게 설정해놈)
      creatorId: uid,
      profileImg: photoURL,
      nickname: displayName,
    });

    //담아주고 다시 comment부분을 비워주기(댓글쓰는란 부분)
    comment.value = "";

    // getCommentList 를 통해 전체 댓글리스트를 다시 불러온것
    getCommentList();
  } catch (error) {
    alert(error);
    console.log("error in addDoc:", error);
  }
};

//수정버튼 클릭시
export const onEditing = (event) => {
  event.preventDefault();

  //버튼 비활성화 시키려고 작업한 두 줄
  const udBtns = document.querySelectorAll(".editBtn, .deleteBtn");
  udBtns.forEach((udBtn) => (udBtn.disabled = "true"));

  console.log('onEditing메소드 시작! ')

  const cardBody = event.target.parentNode.parentNode;
  console.log('event.target가 누군교 : ' , event.target )
  console.log('event.target.parentNode가 누군교 : ' , event.target.parentNode )
  console.log('event.target.parentNode.parentNode가 누군교 : ' , event.target.parentNode.parentNode )
 
  //처음에는 commentText가 보이게 되어있고
  const commentText = cardBody.children[0].children[0]; //실제 수정된 텍스트 댓글창(보이는 댓글)

  //수정 버튼 클릭시 나오는 수정화면텍스트창은 처음부터 클래스 default값이 noDisplay로 되어있다.
  const commentInputP = cardBody.children[0].children[1]; // 댓글수정하는 란
  console.log('cardBody.children[0].children[0] : ', cardBody.children[0].children[0])
  console.log('cardBody.children[0].children[1] : ', cardBody.children[0].children[1])

  // 수정버튼을 누르면 commentText가 사라지고 commentInputP 얘가 뿅 나와야하니
  // 먼저 수정된댓글화면인 commentText 에 noDisplay를 입히고
  commentText.classList.add("noDisplay"); // 수정한 댓글창(보이는댓글)을 안보이게 하고
  
  //commentInputP에 block같은기능을 넣어주고(이거 부트스트랩이래)
  commentInputP.classList.add("d-flex"); // 댓글 수정하는 란을 보이게 한다. d-flex라고하면 block속성을 갖으면서 올라감
  //commentInputP에 이미 설정되있던 noDisplay를 지워주고
  commentInputP.classList.remove("noDisplay"); //댓글수정하는 란을 보이게 하고
  
  //댓글수정란 포커스! 
  commentInputP.children[0].focus(); //
  
};


//완료버튼 눌렀을 때 메소드
export const update_comment = async (event) => {
  event.preventDefault();
  console.log('완료버튼 눌렀을 때 실행되는 update_comment 메소드 시작! ')
  const newComment = event.target.parentNode.children[0].value; //수정된 댓글내용
  const id = event.target.parentNode.id; //수정란작성하는 p태그 id값 
  const parentNode = event.target.parentNode.parentNode; // 그 한 댓글 전체 blockquote 박스
  const commentText = parentNode.children[0]; //<p class="commentText">수정한 댓글</p>

  console.log('event.target.parentNode.children[0].value : ',event.target.parentNode.children[0].value)
  console.log('event.target.parentNode.id : ',event.target.parentNode.id)
  console.log('event.target.parentNode.parentNode : ',event.target.parentNode.parentNode)
  console.log('parentNode.children[0] : ',parentNode.children[0])

  //'수정'버튼 누르면 보이는수정완료댓글이 안보인상태로 들어가잇엇을거니, 다시 '완료'버튼을 누르면 보이게 해야되잖아
  commentText.classList.remove("noDisplay");
  const commentInputP = parentNode.children[1]; // 수정댓글입력하는 창
  console.log('commentInputP : ',commentInputP) 

  //댓글수정하는 창을 없애주는 것
  commentInputP.classList.remove("d-flex");
  commentInputP.classList.add("noDisplay");

  //이건 db의 어디에 저장할건지 경로를 지정해준것
  // comments 콜랙션에 id값으로 doc이 만들어져있을것
  //doc이라고 해서 db에 저장할 수 잇다고 코딩애플이 그랬음
  const commentRef = doc(dbService, "comments", id);
  try {
    //commentRef 이 경로에 newComment(수정된 댓글내용)을 넣어준 것
    await updateDoc(commentRef, { text: newComment });
    getCommentList();
  } catch (error) {
    alert(error);
  }
};


export const delete_comment = async (event) => {
  console.log('delete메소드 시작!')
  event.preventDefault();
  console.log('event.target :',event.target)
  const id = event.target.name; //YC2pVWgsopmKyOR6846q -> db에 저장할때 
  console.log('event.target.name :',event.target.name) 
  const ok = window.confirm("해당 응원글을 정말 삭제하시겠습니까?");
  // ok값이 true가 되면? 실행
  if (ok) {
    try {
      await deleteDoc(doc(dbService, "comments", id));
      getCommentList();
    } catch (error) {
      alert(error);
    }
  }
};


export const getCommentList = async () => {
  // 빈 배열을 먼저 하나 만들어놓기
  let cmtObjList = [];
  const q = query(
    //dbService가 파이어스토어를 의미, comments라는 스토어에서 
    collection(dbService, "comments"),
    orderBy("createdAt", "desc")
  );
  //getDocs : 데이터를 불러오는 것
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const commentObj = {
      id: doc.id,
      ...doc.data(),
    };
    cmtObjList.push(commentObj);
  });
  const commnetList = document.getElementById("comment-list");
  const currentUid = authService.currentUser.uid;
  
  commnetList.innerHTML = "";
  cmtObjList.forEach((cmtObj) => {
    //cmtObj.creatorId 와 currentUid가 일치하면 isOwner가 true가 된다.
    const isOwner = currentUid === cmtObj.creatorId;
    const temp_html = `<div class="card commentCard">
          <div class="card-body">
              <blockquote class="blockquote mb-0">
                  <p class="commentText">${cmtObj.text}</p>
                  <p id="${
                    cmtObj.id
                  }" class="noDisplay"><input class="newCmtInput" type="text" maxlength="30" /><button class="updateBtn" onclick="update_comment(event)">완료</button></p>
                  <footer class="quote-footer"><div>BY&nbsp;&nbsp;<img class="cmtImg" width="50px" height="50px" src="${
                    cmtObj.profileImg
                  }" alt="profileImg" /><span>${cmtObj.nickname ?? "닉네임 없음"}</span></div>
                  <div class="cmtAt">${new Date(cmtObj.createdAt).toString() .slice(0, 25)}</div></footer>
              </blockquote>
              <div class="${isOwner ? "updateBtns" : "noDisplay"}">
                   <button onclick="onEditing(event)" class="editBtn btn btn-dark">수정</button>
                <button name="${
                  cmtObj.id
                }" onclick="delete_comment(event)" class="deleteBtn btn btn-dark">삭제</button>
              </div>            
            </div>
     </div>`;
    const div = document.createElement("div");
    div.classList.add("mycards");
    div.innerHTML = temp_html;
    commnetList.appendChild(div);
  });
};


