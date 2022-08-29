import { apiSlice } from "../../app/api/apiSlice";

export const gstApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getGst: builder.mutation({
            query: (credentials) => ({
                url: '/account/gstverify/',
                method: 'POST',
                body: credentials
            })
        }),
    })
})

export const { 
    useGetGstMutation 
} = gstApiSlice;