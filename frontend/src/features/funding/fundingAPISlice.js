import { apiSlice } from "../../app/api/apiSlice";

export const fundingSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getFunds: builder.query({
            query: () => '/news/funding/'
        }),
    })
})

export const {
    useGetFundsQuery,
} = fundingSlice