import { useRouter } from "next/router";

const Post = () => {
  // 뒤의 아이디값 /post/23 이런거
  // 을 가져올 수 있는 방법 : useRouter 사용하기
  const router = useRouter();

  // pid말고 id로 해도 됌
  const { pid } = router.query;
  console.log("router.query:", router.query);

  return (
    <div>
      {/* 이런걸 다이나믹 라우트라고 하넹 */}
      <h3>여기는 Post 페이지라능</h3>
      <h3>pid:{pid}</h3>
    </div>
  );
};

export default Post;
