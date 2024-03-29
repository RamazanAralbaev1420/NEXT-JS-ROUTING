import Link from 'next/link';

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = res.json();
  return result;
}
const page = async function () {
  const data = await fetchData();
  console.log(data);
  return (
    <div>
      <div></div>
      <h1>Home page</h1>
      {data.map((item) => {
        return (
          <div key={item.id} className="post">
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <Link href={`/post/` + item.id}>Детальнее</Link>
          </div>
        );
      })}
    </div>
  );
};

export default page;
