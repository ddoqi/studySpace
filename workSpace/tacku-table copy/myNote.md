1. 서버사이드랜더링
2. 스테틱 제너레이트

자, 근본적으로
SSR을 왜 써야할까? (서버사이드랜더링)
데이터를 조회해와서 서버에서 랜더링해서 준다고

1. 데이터를 다 불러오고나서 클라이언트한테 완성된 페이지를 줄 수 있음

//--------------- 이건 SSR 방식------------------

import { useRouter } from "next/router";

// const Post = ({post})
const Post = (props: any) => {
const router = useRouter();
const { id } = router.query;

console.log("props", props);
console.log("props.post.title", props.post.title);
return (
<div>
<h2>여기는 ssr폴더의 [id].tsx 파일입니다.</h2>
<h3>Post : {id}</h3>
<h3>title:{props.post.title}</h3>
<h3>body: {props.post.body}</h3>
</div>
);
};

export default Post;

export async function getServerSideProps(context: any) {
const { params } = context;
const { id } = params;

const response = await fetch(
`https://jsonplaceholder.typicode.com/posts/${id}`
);

const post = await response.json();

return {
props: {
post,
}, // will be passed to the page component as props
};
}

//-------------------------------

//--------------- 이건 SSG 방식------------------

import { useRouter } from "next/router";

const Post = (props: any) => {
const router = useRouter();
return (
<div>
Post : {router.asPath}
<h2>{props.post.title}</h2>
<p>{props.post.body}</p>
</div>
);
};

export default Post;

export async function getStaticProps(context: any) {
const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1}`);
const post = await response.json();

console.log("figetStaticPropsrst가 실행");
console.log("context는 뭐하는애야", context);

return {
props: {
post,
},
};
}
//------------------------------------
