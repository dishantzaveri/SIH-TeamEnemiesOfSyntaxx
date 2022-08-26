import { apiSlice } from "../../app/api/apiSlice";

export const schemesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSchemes: builder.query({
            query: () => '/schemes/scheme/'
        }),
    })
})

export const {
    useGetSchemesQuery
} = schemesApiSlice