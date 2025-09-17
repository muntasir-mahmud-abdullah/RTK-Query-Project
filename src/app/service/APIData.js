import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath: "posts",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        //Get All Posts (reading)
        getAllPosts: builder.query({
            query: () => "/posts",
        }),
        //get post by id (reading)
        getPostById: builder.query({
            query: (id) => `/posts/${id}`,
        }),
    }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postsApi;