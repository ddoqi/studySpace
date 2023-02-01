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
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/2}`);

  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}
