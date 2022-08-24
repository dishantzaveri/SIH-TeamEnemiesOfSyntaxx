import { apiSlice } from "../../app/api/apiSlice";

export const eventsAPISlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getEvents: builder.query({
            query: () => '/api/session/'
        }),
        postEvents: builder.mutation({
            query: (post) => ({
                url: '/api/session/',
                method: 'POST',
                body: { ...post }
            })
        }),
    })
})

export const {
    useGetEventsQuery,
    usePostEventsMutation,
} = eventsAPISlice