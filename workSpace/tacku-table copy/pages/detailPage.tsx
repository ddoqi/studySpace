import React from "react";

// detailPage가 페이지가 된다면
// SSR일것이고, (서버에서 받아오니)
// 해당게시물 Id값을 받아서, 해당 Id의 게시물만 서버에서 받아와서 조회가 되겠죠?
const detailPage = ({ id }: { id: string }) => {
  const 서버에서해당아이디만조회해오는함수 = () => {
    //서버에서 함수를 조회해오는 함수가 들어가겠죠??
  };
  return <div>detailPage</div>;
};

export default detailPage;

//------------------------------아래는 어떤식으로 데이터 받아올지 양식
//-------------------------
// import { useRouter } from "next/router";

// // const Post = ({post})
// const Post = (props: any) => {
//   const router = useRouter();
//   const { id } = router.query;

//   console.log("props", props);
//   console.log("props.post.title", props.post.title);
//   return (
//     <div>
//       <h2>여기는 ssr폴더의 [id].tsx 파일입니다.</h2>
//       <h3>Post : {id}</h3>
//       <h3>title:{props.post.title}</h3>
//       <h3>body: {props.post.body}</h3>
//     </div>
//   );
// };

// export default Post;

// // 만약, js를 껐는데 작동이 안되면, 클라이언트쪽에서
// // 계속 Js로 랜더링을 그려주고 잇엇다는거?
// // 근데, js를 꺼도 계속 작동이 되니
// // 이 말은 서버에서 (url요청한거) 랜더링을 해서 보내주고 잇는
// // SSR임을 확인할 수 있다는 건가??

// // java Script를 disable 했을때!!!

// // js를 끄면, 리액트프로젝트는 작동이 안됌
// // 왜? 클라이언트쪽에서 js를 실행하면서 랜더링을 하고 있어서

// // 근데, 넥스트는 실행이 됌
// // 왜? 서버쪽에서 js실행하면서 랜더링하고있어서

// export async function getServerSideProps(context: any) {
//   // context의 params의 id를 가져올 수 있음
//   // [id].tsx의 id를 가져올 수 있다공
//   const { params } = context;
//   const { id } = params;

//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   );

//   const post = await response.json();

//   return {
//     props: {
//       post,
//     }, // will be passed to the page component as props
//   };
// }
