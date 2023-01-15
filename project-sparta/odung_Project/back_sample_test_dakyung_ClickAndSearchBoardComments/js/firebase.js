// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";


// 프로젝트랑 연결하기 위해 필요한 정보들(파이어베이스에 코드꽂는 작업)
const firebaseConfig = {
    apiKey: "AIzaSyB_o07bi777IxMsKkBeNfOKZFHy-nKJ1gc",
    authDomain: "testtest-9c70b.firebaseapp.com",
    projectId: "testtest-9c70b",
    storageBucket: "testtest-9c70b.appspot.com",
    messagingSenderId: "472171635233",
    appId: "1:472171635233:web:b539b40ca52e9b52d23960"
  };
  
  // Initialize Firebase (파이어베이스와 내 프로젝트를 연결시키고)
  export const app = initializeApp(firebaseConfig);
  

// 내 프로젝트와 연결된 그 app 돼지코를 각자 껴주기
  export const dbService = getFirestore(app); //댓글추가삭제하는거
  export const authService = getAuth(app);
  export const storageService = getStorage(app);