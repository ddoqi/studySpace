import { useRef, useState, useMemo } from "react";
import dynamic from "next/dynamic";
// 이걸 처음에 주석처리 안했었는데,
// 그러니까 document 어쩌구 에러가 떴음
// 이유 : 서버사이드랜더링 할때 react-qull은 document를 쓰는게 대따 많은데
// 서버에선 document라는 객체가 없어서 났던 오류이다.
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storageService } from "@/config/firebase";
//------------------------import 섹션----------------------
// import useSsr from "@/hooks/useSsr";
//--------------------------------------------------------
// dynamic을 쓰는 이유?
// 해당 컴포넌트가 그려질때 Import시키려고

const QuillWrapper = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return function comp({ forwardedRef, ...props }) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false }
);

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const EditorComponent = () => {
  const quillRef = useRef();
  const [contents, setContents] = useState("");

  const imageHandler = () => {
    console.log("이미지 핸들러 실행!");
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    document.body.appendChild(input);
    input.click();

    // "파일 onChange 이벤트 발생했을때"
    input.onchange = async () => {
      const inputImage = input.files;
      const uploadImage = inputImage[0];
      console.log("inputImage", inputImage);
      console.log("uploadImage:", uploadImage);
      if (inputImage !== null) {
        const reader = new FileReader();
        reader.readAsDataURL(uploadImage);
        reader.onloadend = (finishedEvent) => {
          const imgDataUrl = finishedEvent.currentTarget.result;
          console.log("1");
          localStorage.setItem("imgDataUrl", imgDataUrl);
          addImgTag();
        };
      }
    };
  };

  const addImgTag = async () => {
    let randomID = Date.now();
    const imgRef = ref(storageService, `photoTitle${randomID}`);
    const imgDataUrl = localStorage.getItem("imgDataUrl");
    let downloadUrl;

    if (imgDataUrl) {
      console.log("2");
      console.log("imgDataUrl", imgDataUrl);

      const response = await uploadString(imgRef, imgDataUrl, "data_url");
      // console.log("response", response.ref);
      downloadUrl = await getDownloadURL(response.ref);
      //--------------------------------------------------------------------
      //-------------현재 커서 위치에 이미지 url 삽입해주는거-------------
      //const range = editor.getSelection(); 현재 에디터 커서 위치를 알려준다.
      const range = quillRef.current.getEditorSelection();
      quillRef.current
        .getEditor()
        .insertEmbed(range.index, "image", downloadUrl);
      quillRef.current.getEditor().setSelection(range.index + 1);
      document.body.querySelector(":scope > input").remove();
    }
  };
  // quill에서 사용할 모듈을 설정하는 코드 입니다.
  // 원하는 설정을 사용하면 되는데, 저는 아래와 같이 사용했습니다.
  // useMemo를 사용하지 않으면, 키를 입력할 때마다, imageHandler 때문에 focus가 계속 풀리게 됩니다.
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["image", "video"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),

    []
  );

  // useSsr: 이게 Broswer에서 띄워지고 있는건지, server에서 띄워지고 있는건지 확인할 수 있는 훅
  // const { isBrowser, isServer } = useSsr();

  return (
    <>
      {/* {isBrowser && ( */}
      <QuillWrapper
        forwardedRef={quillRef}
        value={contents}
        onChange={setContents}
        modules={modules}
        formats={formats}
        theme="snow"
        placeholder="내용을 입력해주세요."
      />
      {/* // )} */}
      <div>{contents}</div>
      {/* <div dangerouslySetInnerHTML={{ __html: contents }} /> */}
    </>
  );
};

export default EditorComponent;

//-------타입스크립트로 하던거 --------------------
// import { useRef, useState, useMemo } from "react";
// import dynamic from "next/dynamic";
// //이렇게 라이브러리를 불러와서 사용하면 됩니다
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// //-----------------------------------------------------------
// import {
//   getStorage,
//   ref,
//   uploadString,
//   getDownloadURL,
// } from "firebase/storage";
// import { storageService } from "@/config/firebase";
// //------------------------------------------------------------
// // const QuillWrapper = dynamic(() => import("react-quill"), {
// //   ssr: false,
// //   loading: () => <p>Loading ...</p>,
// // });

// const QuillWrapper = dynamic(async () => {
//   const { default: RQ } = await import('react-quill');
//   return function comp({ forwardedRef, ...props }) {
//     return <RQ ref={forwardedRef} {...props} />;
//   };
// }, { ssr: false });

// const formats = [
//   "header",
//   "font",
//   "size",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "image",
//   "video",
// ];

// const EditorComponent = () => {
//   const QuillRef = useRef<ReactQuill>();
//   const [contents, setContents] = useState("");

//   // 이미지를 업로드 하기 위한 함수
//   const imageHandler = () => {
//     console.log("이미지 핸들러 실행!");
//     // // 파일을 업로드 하기 위한 input 태그 생성
//     const input = document.createElement("input");
//     // const formData = new FormData();
//     let url = "";

//     input.setAttribute("type", "file");
//     input.setAttribute("accept", "image/*");
//     input.click();

//     // // 파일이 input 태그에 담기면 실행 될 함수
//     input.onchange = async () => {
//       const file = input.files;
//       const test: any = input.files;
//       let theFile = test[0];
//       // console.log("test:", test[0]);
//       if (file !== null) {
//         // formData.append("image", file[0]);
//         const reader = new FileReader();
//         reader.readAsDataURL(theFile);
//         reader.onloadend = (finishedEvent: any) => {
//           const imgDataUrl = finishedEvent.currentTarget.result;
//           // console.log("imgDataUrl:", imgDataUrl);
//           localStorage.setItem("imgDataUrl", imgDataUrl);
//         };
//       }

//       let randomNumber = Date.now();
//       // console.log("randomNumber", randomNumber);
//       const imgRef = ref(storageService, `myddong${randomNumber}`);
//       const imgDataUrl = localStorage.getItem("imgDataUrl");
//       // console.log("로컬스토리지 imgDataUrl: ", imgDataUrl);
//       let downloadUrl;

//       if (imgDataUrl) {
//         const response = await uploadString(imgRef, imgDataUrl, "data_url");
//         // console.log("response", response.ref);
//         downloadUrl = await getDownloadURL(response.ref);
//         // console.log("downloadURL:", downloadUrl);
//         //--------------------------------------------------------------------
//         //-------------현재 커서 위치에 이미지 url 삽입해주는거-------------

//         const range = QuillRef.current?.getEditor().getSelection()?.index;
//         if (range !== null && range !== undefined) {
//           let quill = QuillRef.current?.getEditor();
//           console.log("quill", quill);
//           quill?.setSelection(range, 1);
//           quill?.clipboard.dangerouslyPasteHTML(
//             range,
//             `<img src=${downloadUrl} alt="이미지 태그가 삽입됩니다." />`
//           );
//         }
//         // return { ...response, success: true };
//       }
//     };
//   };

//   // quill에서 사용할 모듈을 설정하는 코드 입니다.
//   // 원하는 설정을 사용하면 되는데, 저는 아래와 같이 사용했습니다.
//   // useMemo를 사용하지 않으면, 키를 입력할 때마다, imageHandler 때문에 focus가 계속 풀리게 됩니다.
//   const modules = useMemo(
//     () => ({
//       toolbar: {
//         container: [
//           ["bold", "italic", "underline", "strike", "blockquote"],
//           [{ size: ["small", false, "large", "huge"] }, { color: [] }],
//           [
//             { list: "ordered" },
//             { list: "bullet" },
//             { indent: "-1" },
//             { indent: "+1" },
//             { align: [] },
//           ],
//           ["image", "video"],
//         ],
//         handlers: {
//           image: imageHandler,
//         },
//       },
//     }),
//     []
//   );
//   return (
//     <>
//       <QuillWrapper
//         // ref={(element: any) => {
//         //   if (element !== null) {
//         //     QuillRef.current = element;
//         //   }
//         // }}
//         forwardedRef={quillRef}
//         value={contents}
//         onChange={setContents}
//         modules={modules}
//         formats={formats}
//         theme="snow"
//         placeholder="내용을 입력해주세요."
//       />
//     </>
//   );
// };

// export default EditorComponent;
