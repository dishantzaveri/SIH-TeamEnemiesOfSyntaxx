import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/account/login/',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        registerMentee: builder.mutation({
            query: (credentials) => ({
                url: '/account/entrepreneur_register/',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        registerMentor: builder.mutation({
            query: (credentials) => ({
                url: '/account/mentor_register/',
                method: 'POST',
                body: { ...credentials }
            })
        }),
    })
})

export const {
    useLoginMutation,
    useRegisterMenteeMutation,
    useRegisterMentorMutation,
    useGetProfileQuery,
} = authApiSlice