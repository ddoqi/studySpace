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

리액트퀼

참고싸이트 : https://velog.io/@jungsangu/Next.js%EC%97%90%EC%84%9C-react-quill-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C-%ED%95%98%EA%B8%B0

1. NEXT.js의 SSR 방식의 충돌
   react-quill 라이브러리는 내부적으로 document 객체를 사용하는데 next.js 에서 ssr로 렌더링될때 브라우저가 아닌 서버에서 렌더링이 되기 때문에 브라우저에서만 사용 가능한 window 객체가 없고 그로 인해 window.document 객체가 존재하지 않기 때문이다.

해결방법) SSR 안쓰게 하려면
===> To dynamically load a component on the client side, you can use the ssr option to disable server-rendering.

```bash
import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('../components/header'), {
  ssr: false,
  })
```

2.  위에서 설명한것처럼 dynamic으로 react-quill 라이브러리를 가져오고, 이미지 커서 위치에 이미지를 삽입하고 커서를 다음 위치로 변경할려면 ReactQuill 컴포넌트의 ref가 필요한데 그냥 ref속성으로 가져오면 못가져오는 버그가 난다.

이런 버그가 발생하는 이유는 next/dynamic으로 import를 하면 그냥 ref속성을 사용해서는 ref를 가져올 수 없다. ref를 가져올라면 next/dynamic에서 함수로 react-quill을 dynamic import를 해서 forwardRef를 시켜주고 ReactQuill컴포넌트에서 forwardedRef 속성으로 ref를 접근하면 된다.
