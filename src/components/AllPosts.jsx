import { useGetAllPostsQuery } from "../app/service/APIData";

export default function AllPosts() {
  const { data, isError, isLoading } = useGetAllPostsQuery();
  console.log(data);
  if (isError) {
    return <h1>Oh I have and error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
        <h1>All Posts title</h1>
      {data.map((p) => {
      return  <p key={p.id}>{p.title}</p>;
      })}
    </div>
  );
}
