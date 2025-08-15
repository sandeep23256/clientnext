import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const technologyApi = createApi({
    reducerPath: 'technologyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        credentials: 'include',
    }),
    tagTypes: ['technology'],
    endpoints: (builder) => ({
        technologyDisplay: builder.query({
            query: () => 'technologyDisplay',
            providesTags: ['technology'],
        }),
        technologyInsert: builder.mutation({
            query: (formData) => ({
                url: 'technologyInsert',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['technology'],
        }),
        technologyUpdate: builder.mutation({
            query: ({ id, formData }) => ({
                url: `technology/${id}`,
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['technology'],
        }),
        technologyDelete: builder.mutation({
            query: (id) => ({
                url: `technology/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['technology'],
        }),
    }),
})

export const {
    useTechnologyDisplayQuery,
    useTechnologyInsertMutation,
    useTechnologyUpdateMutation,
    useTechnologyDeleteMutation,
} = technologyApi
