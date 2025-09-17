import { useGetAllPostsQuery } from "../app/service/APIData";

export default function AllPosts() {
  const { data, isError, isLoading } = useGetAllPostsQuery();
//   console.log(data);
  if (isError) {
    return <h1>Oh I have and error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>All Posts</h1>
      {data.map((p,index) => (
        <>
          <h2 key={p.id}>{p.title}</h2>
          <p key={index}>{p.body}</p>
        </>
      ))}
    </div>
  );
}
