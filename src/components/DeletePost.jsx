import { useDeletePostMutation } from "../app/service/APIData";

export default function DeletePost({ postId }) {
  const [deletePost, { data, error, isLoading }] = useDeletePostMutation();
  if (error) {
    return <h1>Errorrr</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const handleDelete = async () => {
    try {
      await deletePost(postId);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {data && <h1>Post {postId} successfully deleted</h1>}

      <button onClick={handleDelete} disabled={isLoading}>
        Delete Post
      </button>
    </div>
  );
}
