import { apiSlice } from "../../app/api/apiSlice";

export const postAPISlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/api/posts/'
        }),
        postPost: builder.mutation({
            query: (post) => ({
                url: '/api/posts/',
                method: 'POST',
                body: { ...post }
            })
        }),
    })
})

export const {
    useGetPostsQuery,
    usePostPostMutation,
} = postAPISlice