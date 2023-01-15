import { authService, storageService } from "../firebase.js";
import {
  ref,
  uploadString,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
import { updateProfile } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";


// save_Board와 get_Board를 위해 필요했던 부분
import {
  addDoc,
  collection,
  orderBy,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { dbService } from "../firebase.js";




//사진클릭했을때 파인더 창 뜨는것
//파일을 다른걸 선택해서 확인을 누르면 그제서야 event가 발생한다. 
export const onFileChange = (event) => {
    // event.target은 아래를 가리키고
    // <input onchange="onFileChange(event)" id="imgInput" type="file" accept="images/*" />
    // 저 것의 속성중 files의 내용을 가져오려고 하는 것(이게 사진의 상세 정보들이야)
    const theFile = event.target.files[0]; 
    console.log('event.target이 누구?',event.target)
    console.log('event.target의 files는 누구?',event.target.files)
    console.log('event.target.files[0] : ', event.target.files[0])
    
    //얘를 인스턴스라고 부르는거같아
    const reader = new FileReader();
    // 자바스크립트에 자체 내장된 FileReader 클래스를 사용하려고 reader 객체를 만들어줌
  
    // FileReader에 내장된 readAsDataURL 메소드를 사용해서, theFile를 데이터url 형식으로 바꿔줬고
    reader.readAsDataURL(theFile); // file 객체를 브라우저가 읽을 수 있는 data URL로 읽음.
    // readAsDataURL가 데이터url로 바꾸는걸 완성햇는지를 onloadend 얘가 이벤트리스너처럼 듣고잇음,이벤트가 finishedEvent 되었으면 발동 
    console.log('readAsDataURL를 통해 바뀐 reader이 누구냐:',reader)
   
    reader.onloadend = (finishedEvent) => {
       console.log('finishedEvent : ', finishedEvent)
      
      // 파일리더가 파일객체를 data URL로 변환 작업을 끝났을 때 이벤트 발동
        // 데이터url로 바꾸는걸 완료했으면? currentTarget(=데이터url로 바뀐 넘)의 result를 imgDataurl에 넣어준다.
        const imgDataUrl = finishedEvent.currentTarget.result;
  
        console.log('finishedEvent.currentTarget.result : ', finishedEvent.currentTarget.result)
        //임시보관용도(프로필변경 버튼을 클릭하지 않고 뒤로갔다가 왓을때는 사진 업로드가 안됌)
        //localStorage 는 내컴퓨터에있는 임시저장소다. localStorage에 "imgDataUrl"라는 이름으로 저장을 해주기!(=setItem)
        localStorage.setItem("imgDataUrl", imgDataUrl);
  
        //이 아래 작업은 순전히 로컬저장소에 임시로 저장되어잇는 내 사진이 보일뿐! (파이어베이스 스토리지에는 올라가지 않은 것!)
        document.getElementById("profileView").src = imgDataUrl;
    };
  };
  //우리는 결국 downloadUrl 때문에 임시로 데이터유알엘이라는 중간 과정을 거치는 거다.




export const changeProfile = async (event) => {
  event.preventDefault();
  // 버튼을 클릭한 상태일때는 버튼을 클릭하지 못하도록
  document.getElementById("profileBtn").disabled = true;

  // storageService안에 authService.currentUser.uid(폴더이름), 이 폴더 안에 파일 이름을(uuidv4) 이런 이름으로 저장하겟다 라는 뜻
  // 우리가 만들어놓은 storageService 서비스 안에 `${authService.currentUser.uid} 이런 폴더를 만들고 그 폴더안에 파일 이름을 ${uuidv4()로 저장하겠다.   
  console.log('authService.currentUser.uid로 폴더가 생기게쮜?',authService.currentUser.uid)
  const imgRef = ref(
    storageService,
    `${authService.currentUser.uid}/${uuidv4()}`
  );
  // firebaseStroage에 해당 User의 폴더를 만들고, 고유한 파일명으로 나중에 사진을 저장해주려고 폴더 경로를 만들어준것 
  // uuidv4 라는 넘 자체가 세상에서 절대 안겹치는 id값을 만들어주는 것


  const newNickname = document.getElementById("profileNickname").value;
  // 프로필 이미지 dataUrl을 Storage에 업로드 후 다운로드 링크를 받아서 photoURL에 저장.

  //임시적으로 업로드를 하기 위해 필요한 애 (아래 onFileChange함수에서 만든 imgDataUrl를 데꼬온 것)
  const imgDataUrl = localStorage.getItem("imgDataUrl");
  let downloadUrl;

  if (imgDataUrl) {
    //파이어베이스에 정상적으로 업로드가 됏다는게 Response에 담긴다
    // uploadString : 파이어베이스에서 제공하는 api를 이용
    // uploadString를 이용하면 response를 받을 수 있음
    // imgDataUrl는 임시적으로 업로드를 하기 위해 필요한애고 업로드를 하면 날라가는애고
    // downloadUrl이 찐또배기(핸들링은 얘로함)
    // data_url이라는 타입의 이미지 형식이 있음(브라우저에 치면 바로 그 이미지가 뜸)

    // await uploadString(이 파일 경로에, 이것을, "이런 타입으로 넣겠다"); --> data_url이 타입인것
    const response = await uploadString(imgRef, imgDataUrl, "data_url");
    

    // 그 response에 ref라는 애가 있는데 그게 다운로드url이다. 
    // 이 아래 작업을 하면, 파이어베이스 스토리지의 사진 다운로드url(우리 이미지 주소해서 모두가 볼 수 잇는 그 링크)
    downloadUrl = await getDownloadURL(response.ref);
  }

  await updateProfile(authService.currentUser, {
    displayName: newNickname ? newNickname : null,
    //photoURL이 프로필사진임
    photoURL: downloadUrl ? downloadUrl : null,
  })
    .then(() => {
      alert("프로필 수정 완료");
      window.location.hash = "#mainPage";
    })
    .catch((error) => {
      alert("프로필 수정 실패");
      console.log("error:", error);
    });
};

export const moveProfilePage = () => {
    window.location.replace("#ProfilePage");
  }

  
  // ----------------------💚게시물 작성/조회💚-----------------------------------
  //---------------------💚 게시물 저장 💚---------------------
  export const save_board = async (event) => {
    event.preventDefault();
    const boardcontent = document.getElementById("boardcontent");
    const keyword = document.getElementById("keyword");
    const { uid, displayName } = authService.currentUser;
  
    try {
      await addDoc(collection(dbService, "boardContent"), {
        text: boardcontent.value,
        createdAt: Date.now(),
        // 화면에 실제로 uid가 나타나지는 않음
        //creatorID에 uid넣는 이유 : 수정/삭제를 해당 uid만 삭제할 수 있도록(이거 getCommentList에 보면 일치하는 애만 보이는 클래스 띄우게 설정해놈)
        creatorId: uid,
        nickname: displayName,
        keyword : keyword.value,
        
      });
  
      //담아주고 다시 comment부분을 비워주기(댓글쓰는란 부분)
      boardcontent.value = "";
  
      // getCommentList 를 통해 전체 댓글리스트를 다시 불러온것
      getBoardList();
    } catch (error) {
      alert(error);
      console.log("error in addDoc:", error);
    }
  };

//---------------------💚 게시물 조회 💚---------------------
export const getBoardList = async () => {
  console.log('getBoardList가 실행되었다.')
  const keyword = document.getElementById("keyword");
  
  let BoardList = [];

    // //<nickname>으로 불러오는 쿼리
    // const BoardRef = collection(dbService, "boardContent");
    // const q = query(BoardRef, where("nickname", "==", "피카츙"));

  // < 해당 user id가 쓴 데이터 불러오는 쿼리>
  const BoardRef = collection(dbService, "boardContent");
  const q = query(BoardRef, where("creatorId", "==", authService.currentUser.uid));

  // //<데이터 다 불러오는 쿼리>
  // const q = query(
  //   collection(dbService, "boardContent"),
  //   orderBy("createdAt", "desc")
  // );

  const querySnapshot = await getDocs(q);
  
  //튜터님한테 이 부분 물어보기 ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥
  querySnapshot.forEach((doc) => {
    const boardObj = {
      id: doc.id,
      ...doc.data(),
    };
    BoardList.push(boardObj);
  });

  const boardList = document.getElementById("boardList");
  const currentUid = authService.currentUser.uid;
  
  boardList.innerHTML = "";

  BoardList.forEach((boardobj) => {
    
    const temp_html = `
      <div>카테고리는 몇번? :${boardobj.keyword}</div>
      <div>저는 닉네임이에오 :${boardobj.nickname}</div>
      <div>저는 글내용이에오 : ${boardobj.text}</div>
      <div>저는 고유아아디에오 :${boardobj.creatorId}</div>
      <hr/>
      `;
    
    const div = document.createElement("div");
    div.classList.add("myboard");
    div.innerHTML = temp_html;
    boardList.appendChild(div);
  });
};



// 테수투ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ이것만 되면 반은 간다
export const SearchCate = async () => {
  console.log('SearchCate가 실행되었슴당.')
  const cateSearchbar = document.getElementById("cateSearchbar");
  console.log('cateSearchbar의 value값?',cateSearchbar.value)

  const searchTarget = cateSearchbar.value;

  let TargetBoardList = [];
  const TargetBoardRef = collection(dbService, "boardContent");
  const q = query(TargetBoardRef, where("keyword", "==", searchTarget));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const targetBoardObj = {
      id: doc.id,
      ...doc.data(),
    };
    TargetBoardList.push(targetBoardObj);
  });

  const htmlcateBoardList = document.getElementById("cateBoardList");
  htmlcateBoardList.innerHTML = "";

  TargetBoardList.forEach((boardobj) => {
    
    const temp_html = `
      <div style="color:red">카테고리는 몇번? :${boardobj.keyword}</div>
      <div>저는 닉네임이에오 :${boardobj.nickname}</div>
      <div>저는 글내용이에오 : ${boardobj.text}</div>
      <div>저는 고유아아디에오 :${boardobj.creatorId}</div>
      <hr/>
      `;
    
    const div = document.createElement("div");
    div.classList.add("myCateboard");
    div.innerHTML = temp_html;
    htmlcateBoardList.appendChild(div);
  });
};

