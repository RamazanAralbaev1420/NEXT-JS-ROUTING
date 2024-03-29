import Link from 'next/link';
const Post = ({post}) => {
  return (
    <div>
      <Link href="/">Назад</Link>
      <br />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <b>Author ID: {post.userId}</b>
    </div>
  );
};

export default Post;
