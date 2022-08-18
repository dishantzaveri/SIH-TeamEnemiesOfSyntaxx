import { apiSlice } from "../../app/api/apiSlice";

export const postSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/api/posts/'
        }),
    })
})

export const {
    useGetPostsQuery
} = postSlice