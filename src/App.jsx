import React from 'react'
import AllPosts from './components/AllPosts'
import Post from './components/Post'
import AddNewPost from './components/AddNewPost'
import UpdatePost from './components/UpdatePost'
import DeletePost from './components/DeletePost'

export default function App() {
  return (
    <div>
      {/* <AllPosts /> */}
      {/* <Post /> */}
      {/* <AddNewPost /> */}
      {/* <UpdatePost postId={2} /> */}
      <DeletePost postId={4} />
    </div>
  )
}
