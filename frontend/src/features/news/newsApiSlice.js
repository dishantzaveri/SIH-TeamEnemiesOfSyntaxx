import { apiSlice } from "../../app/api/apiSlice";

export const newsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getNews: builder.query({
            query: () => '/news/newsapi/'
        }),
    })
})

export const {
    useGetNewsQuery
} = newsApiSlice