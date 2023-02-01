// 다이나믹라우팅을 제공하기 위해서 사용된다.
// getStaticPaths과 getStaticProps는 세트바리고
// getStaticPaths에 어떤 id들을 정적으로 static 설정해놓을건지 미리 설정하고
// 그걸 getStaticProps한테 넘겨줌(getStaticProps에선 그 리턴값을 context로 받는다)
// 근데, context 받아서 언제써?? 그건 내부에서 알아서 쓰고있나??
// getStaticProps는 Post라는 함수에 return값을 전달해주고

import { useRouter } from "next/router";

export default function Post(props: any) {
  console.log("Post함수의 props:", props);
  console.log("props.post", props.post);

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>post의 title : {props.post.title}</h3>
      <h3>post의 body : {props.post.body}</h3>
    </div>
  );
}

// Post함수에서 props로 getStaticProps의 리턴을 이어받는다.
export async function getStaticPaths() {
  return {
    // 미리 static한 이 정적인 경로들을 미리 제공해서
    // 어떤 페이지를 정적으로 생성해놓을지 정해두는 역할
    // paths라는 속성으로 전달을 하고
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    // fallback이 false라면, 404를 띄우라는 의미이다.
    // id가 1,2 외의 "4"같은게 들어오면 404를 띄우라고
    // true일때는 그냥 다 뚫리는디?
    // true로 설정해놓으면, paths에 지정해놓은것 외에는 SSR로 처리되는건가?
    // blocking을 해놓으면 정확하게 SSR과 동일하게동작을 한다는데..
    // true도 그러는거 아님...?

    fallback: "blocking",
    // loading처리를 잘할수잇다면 fallback을 true로 하는게 좋다.
  };
}
// //---------------------------------------------
// // 요 아래 함수는 static일때인거같고
// // getStaticPaths의 결과값이 getStaticProps의 Props로 전달이 된다.
// // `getStaticPaths` requires using `getStaticProps`
// export async function getStaticProps(context: any) {
//   console.log("getStaticProps의 context", context);
//   return {
//     // Passed to the page component as props
//     props: { post: {}, hey: "난 Post한테 props로 전달될거양" },
//   };
// }
// //---------------------------------------------

// //---------------------------------------------
// // 동적라우팅을 위해 함수를 짤떄는 아래처럼 짠다는 거 같은데
// // 먼 차이여...?
// // 어차피 1,2 외에 다른 값으로 들어오면 404 에러띄울거면
// // 왜 그게 동적 라우팅이지
// export async function getStaticProps(context: any) {
//   const { id } = context.params;
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   );
//   const post = await response.json();
//   return {
//     props: {
//       post,
//     },
//   };
// }
// //---------------------------------------------

//---------------------------------------------
export async function getStaticProps(context: any) {
  const { id } = context.params;
  const response = await fetch(`http://localhost:3001/posts/${id}`);
  const post = await response.json();
  return {
    props: {
      post,
    },
    // 해당 static페이지 요청이 들어온 후에, 몇초 후에 또 랜더링을 할 것인가를 정하는 것
    revalidate: 5,
  };
}

//---------------------------------------------

// export default function Post(props: any) {
//   console.log("Post함수의 props:", props);
//   console.log("props.post", props.post);
//   // Render post...
//   const router = useRouter();
//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h3>post의 title : {props.post.title}</h3>
//       <h3>post의 body : {props.post.body}</h3>
//     </div>
//   );
// }
