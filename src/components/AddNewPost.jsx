import { useAddNewPostMutation } from "../app/service/APIData";

export default function AddNewPost() {
  const [AddNewPost, { data, error, isLoading }] = useAddNewPostMutation();

  if (error) {
    return <h1>Errorrr</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const handleAddPost = async () => {
    try {
      const newPostData = {
        userId: 1,
        title: "Muntasir Mahmud",
        body: "There is no God accept Allah",
      };
      await AddNewPost(newPostData);
    } catch (err) {
      console.error("Error adding new Post:", err);
    }
  };
  return (
    <div>
      <h1>{data?.userId}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.body}</h1>
      <button onClick={handleAddPost} disabled={isLoading}>
        Add New Post
      </button>
    </div>
  );
}
