import { authService, storageService } from "../firebase.js";
import {
  ref,
  uploadString,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
import { updateProfile } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

export const onFileChange = (event) => {
  //파일도 배열처럼 찍히는데, 그 파일의 첫번째가 필요
  const theFile = event.target.files[0];
  const reader = new FileReader();
  //url로 바꿔주는 넘 -> reader에는 url로 바뀐 결과값이 들어있겠지?

  console.log("theFile : ", theFile);

  reader.readAsDataURL(theFile);

  //reader에 데이터가 담겼으면?(onloadend)
  //onloadend는 이벤트리스너처럼 듣고잇음
  reader.onloadend = (finishedEvent) => {
    const imgDataUrl = finishedEvent.currentTarget.result;
    console.log("finishedEvent.currentTarget : ", finishedEvent.currentTarget);
    //컴터에 있는 localStorage에 imgDataUrl를 저장(코드에 붙여넣으면 보이는 그 사진)
    localStorage.setItem("imgDataUrl", imgDataUrl);
    document.getElementById("profileView1").src = imgDataUrl;
  };
};

export const changeProfile = async (event) => {
  event.preventDefault();
  document.getElementById("profileBtn").disabled = true;

  const imgRef = ref(
    storageService,
    `${authService.currentUser.uid}/${uuidv4()}`
  );

  const newNickname = document.getElementById("profileNickname").value;
  const imgDataUrl = localStorage.getItem("imgDataUrl");
  let downloadUrl;

  if (imgDataUrl) {
    const response = await uploadString(imgRef, imgDataUrl, "data_url");
    downloadUrl = await getDownloadURL(response.ref);
  }

  await updateProfile(authService.currentUser, {
    displayName: newNickname ? newNickname : null,
    photoURL: downloadUrl ? downloadUrl : null,
  })
    .then(() => {
      window.location.reload();
      console.log("프로필 수정 완료!_근데 이거여러번뜨냥 _");
    })
    .catch((error) => {
      alert("프로필 수정 실패");
      console.log("error:", error);
    });
};

export const DeletePhoto = () => {
  document.getElementById("profileView1").src = "/image/Keyword.png";
};
