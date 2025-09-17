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
        addNewPost: builder.mutation({
            query: (newPost) => ({
                url: "/posts",
                method: "POST",
                header: { "Content-Type": "Application/json" },
                body: newPost,
            })
        }),
        updatePost: builder.mutation({
            query: ({id, updatedPost}) => ({
                url: `/posts/${id}`,
                method: "PUT",
                header: { "Content-Type": "Application/json" },
                body: updatedPost,
            })
        }),
        deletePost: builder.mutation({
            query:(id) => ({
                url: `/posts/${id}`,
                method: "DELETE",
            })
        })
    }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery, useAddNewPostMutation, useUpdatePostMutation, useDeletePostMutation } = postsApi;