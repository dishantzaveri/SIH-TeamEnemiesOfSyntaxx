import { gstSlice } from "../../app/api/apiSlice";

export const gstApiSlice = gstSlice.injectEndpoints({
    endpoints: builder => ({
        getGst: builder.mutation({
            query: (credentials) => ({
                url: '/gstverify',
                method: 'POST',
                body: { ...credentials }
            })
        }),
    })
})

export const { 
    useGetGstMutation 
} = gstApiSlice;