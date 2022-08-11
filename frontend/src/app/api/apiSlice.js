import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://vismayvora.pythonanywhere.com',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const gstBaseQuery = fetchBaseQuery({
    baseUrl: 'https://gst-verify-api.herokuapp.com/api',
})

export const apiSlice = createApi({
    baseQuery,
    endpoints: builder => ({})
})

export const gstSlice = createApi({
    baseQuery: gstBaseQuery,
    endpoints: builder => ({})
})