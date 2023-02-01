#### Incremental Static Regeneration

SSG의 단점은 최신 정보를 보여줄 수 없다는 점이다.
그때마다 build를 해주어야 하기 때문

따라서, 일정 주기마다 사용자가 접속하면 revalidate하는 방식이 있다.

#### SSG(Static-Site Generation)

    getStaticProps안의 내용은 서버에만 실행되고, 빌드하는 그 순간에만 실행된다.
    (브라우저에서는 실행되지 않는 것!!)
    getStaticProps의 return 값은 Post page의 props로 전달됩니다.

```js
// SSG 폴더 안의 01.tsx
import { useRouter } from "next/router";
// props는 getStaticProps에서 리턴된 props
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

  return {
    props: {
      post,
    },
  };
}
```

SSR에서는 서버측에 보낼때마다 랜더링하는거고, SSG는 '빌드하는 순간'에만 랜더링한다.
SSG는 브라우저에선 실행되지 않고 서버에서만 실행이 된다.

다만, 개발모드에서는 (yarn dev) 편의상 페이지를 요청할 때마다 빌드가 되는거라서
내가 url요청 엔터칠때마다 콘솔이 찍힌거!!

    의문점
    1. SSG는 build를 하는 순간에 모든 페이지가 준비가 되어있는데, 그럼 다이나믹 라우팅은 어떻게 받나?
    => 특별한 함수와 특별한 방법이 필요하다. => 바로 getStaticPath!!

SSG 더 잘 이해하기

1. json-server를 구축하고 실행한다.
2. (server는 3001에 잘 띄워져있는 상태)
3. yarn build -> yarn start 로 브라우저를 실행한다.
4. db.json 내용을 바꿔본다.
5. db가 바뀌었어도, 클라이언트쪽에서 db 내용이 업데이트되지 않음을 확인할 수 있다.

이유 : SSG는 처음 build 되는 순간에만 랜더링을 하기 때문이다.

    이러한 문제점을 해결하기 위해!
    ISR이 나왔지롱(Incremental Static Regeneration)


    getStaticProps의 리턴문에 'revalidate'를 넣어준다.

```js
export async function getStaticProps(context: any) {
  const { id } = context.params;
  const response = await fetch(`http://localhost:3001/posts/${id}`);
  const post = await response.json();
  return {
    props: {
      post,
    },
  };
}
```

<!-- 궁금증 -->

1. getStaticProps에서 context는 왜 넘겨받아?
   쓰지도 않고 있는것 같은데...
2. SSG에서, fallback이 true랑 blocking의 차이
