import { apiSlice } from "../../app/api/apiSlice";

export const gstApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getStartups: builder.query({
            query: () => '/account/startup/'
        }),
        postGst: builder.mutation({
            query: (credentials) => ({
                url: '/account/gstverify/',
                method: 'POST',
                body: credentials
            })
        }),
    })
})

export const { 
    usePostGstMutation,
    useGetStartupsQuery,
} = gstApiSlice;