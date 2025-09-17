import { useUpdatePostMutation } from "../app/service/APIData";

export default function UpdatePost({postId}) {
  const [updatePost, { data, error, isLoading }] = useUpdatePostMutation();
 
  if (error) {
    return <h1>Errorrr</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const handleUpdatePost = async() => {
    try {
     const updatedPostData = {
        title: "This is a updated title",
      };
     await updatePost({
        id:postId,
        updatedPost: updatedPostData

     });
    } catch (error) {
      console.error(error);
    }
  };
   console.log(data)
  return (
    <div>
        <h1>{data?.title}</h1>
      <button onClick={handleUpdatePost} disabled={isLoading}> Update Post</button>
    </div>
  );
}
