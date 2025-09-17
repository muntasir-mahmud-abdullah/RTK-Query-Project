import React from 'react'
import { useGetPostByIdQuery } from '../app/service/APIData'
export default function Post() {
    const {data,isLoading, isError} = useGetPostByIdQuery(32);
      if (isError) {
    return <h1>Oh I have and error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
    console.log(data)
  return (
    <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
    </div>
  )
}
