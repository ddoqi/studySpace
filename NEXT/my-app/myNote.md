```bash
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },

```

<!-- package.json에서 -->

next는 개발모드와 production모드가 있음

1. 개발모드 : 개발환경에서 저장만 하면 바로 결과물을 볼 수 있음 (hot reloading등과 같은 기능들 실행)
2. build, start : build가 실행되면 실제로 운영하고 있는 '모드'로 파일을 build 해줌
3. start : build를 통해 만들어진 프로젝트를 (배포했을때와 동일한 환경)에서 실행한다.

<!-- 실행순서 -->

1.

```bash
yarn dev
```

<!-- __app.tsx -->

####\_\_app.tsx

- \_\_app.tsx에서는 공통된 레이아웃 페이지 작성, 글로벌 css 적용할수있음

<!-- 궁금 -->

1. router설정 따로 안해줬는데, 왜 about 폴더 만들었다고 url부분에 /about 붙이니까 인식함 ㅇㅅㅇ??
   -> 이런걸 파일 기반 라우팅 시스템이라고 한다고 함.

<!-- next -->

1. next프로젝트는 index.html 파일이 없다.
   -->근데 , yarn build 하고 나니까 생김 ㅇㅅㅇ

<!-- 2강 -->

1. next에서 page란 'pages'폴더안에 있는 리액트 컴포넌트들을 의미한다.
2. next는 기본적으로 파일기반 라우팅을 이용하여 페이지를 만들 수 있다.

- 1. Link태그를 이용
- 2. useRouter를 이용

```js
<div
  onClick={() => {
    router.push("/about");
  }}
>
  about
</div>
```

    앗! 이런 파일기반의 라우팅의 단점은?

ex) 만약, post방식의 값들이 100가지가 넘는다면?
그때마다 파일을 추가시켜줘야할 순 없다.
이런 경우를 위해 next는 *다이나믹 라우트*를 지원한다.
[pid].js <- 이런식으로 작성
post에 어떤것이 오던간에 저 [pid].js 파일이 실행되는 것

<!-- 3강 -->
<!-- api route 기능 -->

1. next.js는 풀스택 프레임워크임
   원래 api를 만들려면 node.js나 express같은, 장고, 스프링부트로 서버를 구축해야되는데
   따로 구축을 안해도 next프로젝트 자체로만 나만의 프로젝트를 만들 수 있음요
   백엔드 서버가 없어도, 서버리스하게 api function을 만들 수 있다.
   db인 mySQL,아폴로, graphQL 에 접근해서 업데이트하는게 쉬울거임
   pages아래있는 api폴더 안에서 이루어진다.
   api안에 있는 모든 파일들은 page가 아니라 'api의 엔드포인트'로 처리된다.

### 최적화?

api 아래 있는 코드들이 몇백줄이 되더라도
yarn build를 통해 번들링을 할때 , 클라이언트의 번들 사이즈를 증가시키지는 않는다.
이 api폴더 아래 있는 넘들 같은 경우에는 배포를 하는 순간 서버에 종속되는 것이기 때문에
클라이언트 쪽에서는 번들링 사이즈가 증가되지 않게 next에서 처리를 해주는 것
-> 원래 최적화도 직접 해야하는데, next가 해주는 것

---

### 번들링이란?

모듈들의 의존성 관계를 파악하여 그룹화시켜주는 작업
(yarn 'build'를 통해 '번들링'을 할때)
-> 모듈화했던 자바스크립트 파일들을 '묶어준다'는 뜻

<!-- 4강 -->

### MPA(Multi-Page-Application)

클라이언트 - 서버
원래는 /about -> about.html을 주고
/profile -> profile.html 페이지를 줬다
문제점 : 페이지 이동시나 렌더링시 '깜빡임' 현상, 유저 사용성 저하

### SPA(Single-Page-Application) - CSR(Client-Side-Rendering)

CSR: 번들 자바스크립트 실행이 완료된 후, API 응답을 받아오기 전까지는 빈 화면(혹은 별도로 설정한 로딩 화면)이 표출

- CSR 방식은??
  CSR 방식은 번들 자바스크립트 실행이 완료된 후, API 응답을 받아오기 전까지는 빈 화면(혹은 별도로 설정한 로딩 화면)이 표출된다.

리액트, 뷰와 같은 방식(JSX를 이용해서 더 쉽게 만들수 있게 됐징)
원래,

```js
const div = document.createElement("div");
div.textContent = "Hello";
body.append(div);
```

이런식으로 했었는데, JSX가 나오고 쉽게 Return문에 <div>달아찡

유저 사용성 개선되었지만, 한번에 '모든파일'을 가져와야되니 초기 로딩속도가 느려지는 문제가 생김
이 문제점을 해결하기 위해 리액트에선 Code Splitting(일명 Lazy-Loading)으로
필요한 파일만 가져오는 식으로 문제점을 개선함

##### But !!!!!

But, "SEO 최적화"의 어려움 발생!!!
CSR의 가장 큰 문제는,  
리액트 프로젝트에서 자바스크립트 동작하지 않을때를 보면
이 경우에는 화면에 렌더링되는게 아무것도 없다.
왜냐? html파일이 있으면, 리액트 돔을 이용해서 그 안에서 동작하는 걸로 되어있으니
이 경우에는 SEO를 하는 , 검색엔진 크롤링 봇 입장에선 html을 볼수가 없음
=> 리액트 헬맷, 서스펜드 컴포넌트 등으로 해결은 할 수 있지만
하지만 , 가장 확실한 방법은 처음부터 html을 제대로 제공하는것

### SSR(Server-Side-Rendering) or SSG(Static-Site Generation)

위의 문제점으로 나온 개념이 SSR과 SSG
서버사이드렌더링은 요청을 할때 '런타임'에 html을 만들어서 보내주는 방식
SSG는 build가 되는 순간 html을 만들어서 보내주는 방식

=> 두마리 토끼를 다 잡은 방식이 됌

<!-- 5강 -->

### Data Fetching OverView

랜더링이란?
js를 이용해서 html을 만드는 행위

createElement -> appendChild 했던거 전통적인 방식
(이건 Client Side Rendering에 가깝지)

Free rendering?
클라이언트에서 일어나는게 아니라 server에서 일어난다.

_'어떤 순간에 일어나냐'에 따라_
1)SSR(Server-side Rendering) : SSR은 서버에서 페이지를 렌더링하는 방식으로, Next.js와 PHP, ASP 등이 이에 속한다.
2)SSG(Static Site Generation) : SSG는 프로젝트 빌드 시에 페이지를 사전 렌더링하는 방식으로, Next.js와 Gatsby, Nuxt.js에서 제공한다.

- 런타임에 일어나면 SSR(server-side rendering)
- 빌드하는 순간에 일어나면 SSG(static site generation)

##### 정리하면

1. CSR
2. SSR
   이 있는데,
   이 SSR은 또

SSR과 SSG로 나누어짐
SSR과 SSG의 차이? 서버에서 '요청'시에 즉시 만드냐, 미리 다~ 만들어놓는냐의 차이
SSR은 요청시에 즉시 만드니, 데이터가 달라져서 미리 만들어놓기 어려운 작업들에 쓰이고
SSG는 페이지들을 미리 만들어놓는거라, 바뀔일이 거의 없어 캐슁해두기 좋은 페이지에 사용

NEXT.js는 페이지별로 SSR,SSG 선택이 가능하다.

##### Next.js가 페이지를 생성하는 방법에는 'static generation'과 'server-side rendering' 방식이 있음

- Incremental Static Regeneration (ISR) : getStaticProps 함수를 활용한 static generation 방식은 '언제나 빌드 시점'에 페이지를 생성하지만,
  ISR 방식은 '일정 주기마다 데이터의 최신 여부를 검사'하고 업데이트된 데이터로 페이지를 다시 생성

##### build와 런타임 차이

1. build : yarn build 할때의 순간임 (ssg가 동작한 걸 알 수 있다.)
   build를 하면 .next라는 파일이 생기는데,
   server 부분에 Pages를 보면, html들이 생긴걸 알 수 있다.

2. 런타임 : 페이지에서 주소를 치고 '요청'을 하는 순간!
   그때, next서버가 돌려줌

##### server-side-props를 이용해서 실제로 서버사이드렌더링 구현하기

1. getServerSideProps는 반드시 page아래에서만 사용할 수 있다.
2. getServerSideProps안에 있는 내용은 브라우저에서 동작하는게 아니라 서버에서 동작한다!!

<!-- 혼자 수업듣다 산으로 갔던 공부들 -->

- API 와 Endpoint의 차이 한 줄 정리

-Representational State Transfer : REST API
REST에는 4가지 속성이 존재한다

1.  서버에 있는 모든 리소스는 각 리로스당 클라이언트가 바로 접근할 수 있는 고유 url이 존재한다.
2.  모든 요청은 클라이언트가 요청할때마다 필요한 정보를 주기 때문에 서버에서는 세션 정보를 보관할 필요가 없다.
    그렇기 때문에 서비스에 자유도가 높아지고 유연한 아키텍쳐 적응이 가능하다.
3.  HTTP 메소드를 사용한다는 점이다. 모든 리소스는 일반적으로 HTTP 인터페이스인
    GET,POST,PUT,DELETE 4개의 메소드로 접근이 되어야 한다.
4.  서비스 내에 하나의 리소스가 주변에 연관된 리소스들과 연결되어 표현되어야 한다.

REST의 구성요소에는 리소스, method, message가 있다.
REST에서 자원에 접근할 때는 URL로 하게 되는데, URL은 자원의 위치를 나타내는 일종의 식별자다.

EndPoint
메소드는 같은 URL들에 대해서도 다른 요청이 되게끔 구별하게 해주는 항목이 바로 '엔드포인트'이다.
같은 url 로 접근해도, HTTP메소드가 POST(생성)냐 GET이냐 PUT(수정)이냐 DELETE이냐에 따라서 엔드포인트가 다르다.

​

<!-- application programming inteface?? -->

API가 두 시스템(어플리케이션)이 상호작용할 수 있게 하는 프로토콜의 총집합이라면,
ENDPOINT는 API가 서버에서 리소스에 접근할 수 있도록 가능하게 하는 URL이라 할 수 있겠다.

프로토콜:복수의 컴퓨터 사이나 중앙 컴퓨터와 단말기 사이에서 데이터 통신을 원활하게 하기 위해 필요한 통신 규약.(컴퓨터와 컴퓨터도 서로 이해 할 수 있는 언어, 공용된 언어를 사용)

- 프로토콜 : 규약, 약속 (http프로토콜을 사용해요, 호출하고 응답받는 통신을 할때 '같은 프로토콜'을 사용해야한다.)
- 인터페이스 : = '연결' 하는 것 (이 서버 인터페이스는 'http프로토콜'로 할게요)
  ex)인터페이스 어떻게 할래? = 연결 어떻게 할래?
- http는 80포트를 쓴다. 22번은 ssh가 쓴다. => well-known 포트라고 한다.
  port는 도달하는 곳이고, 프로토콜은 어떤 방식으로 도달할지 규칙, 규약

- 인터페이스 : 상호작용을 위해서 미리 정의된 약속이다.
  => 인터페이스는 고깃집 '띵똥벨'이다.
- ex) 티비 리모콘, 컴퓨터 키보드, 마우스, 전원버튼 등
- 쌍방(?)을 연결해주기 위한 것이 '인터페이스'

덩치가 큰 API라는 게 있음

- *모듈*이란?
  예를 들어서 함수를 쫘라락 썼어
  근데, 그 함수들을 기능별로 묶어서 나눌수 있자나 (기능별 덩어리로)
  그걸 '모듈화'라고 함
  쫘라락 써져있는 코드를 여러개의 파일로 분리하는 것 = 모듈

- 하휘호환지원 : 신버전 인터페이스가 있음에도 구버전 인터페이스를 지원하는 것
  이걸 ms가 엄청 잘하고 있댕

#### JSON.parse()와 response.json()의 차이?

JSON.parse()에는 응답(response) 바디만을 넣어야한다.
바디와 헤더가 들어가면 데이터를 읽어오지 못한다.

response.json()에는 응답 헤더가 들어가도 바디만 읽어서 불러온다.

fetch를 한 후에 날아오는 reponse객체는 대갈통이 없는 바디만 옴
따라서, res 객체의 json()이라는 메서드를 사용한다.
(이 작업을 해주는게 axios였음
axios를 사용할 경우 res.json()단계를 건너뛰는데,
axios로 받아오는 데이터는 서버에서 넘겨주는 body 데이터 외에 부가적인 정보도 포함되어 있어서 원하는 data를 뽑아써야한다.
)

json()은 Response 스트림을 가져와 스트림이 완료될때까지 읽는다.
