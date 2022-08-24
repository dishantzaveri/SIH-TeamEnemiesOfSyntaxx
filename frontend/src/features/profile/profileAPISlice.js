import { apiSlice } from "../../app/api/apiSlice";

export const eventsAPISlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProfile: builder.query({
            query: id => `/account/${id}/`
        }),
        post: builder.mutation({
            query: ({profile, type}) => ({
                url: `/account/${type}/`,
                method: 'POST',
                body: { ...profile }
            })
        }),
    })
})

export const {
    useGetProfileQuery,
    usePostMutation,
} = eventsAPISlice