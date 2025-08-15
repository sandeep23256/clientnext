import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const portfolioApi = createApi({
    reducerPath: 'portfolioApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        credentials: 'include',
    }),
    tagTypes: ['Portfolio'],
    endpoints: (builder) => ({
        portfolioDisplay: builder.query({
            query: () => 'portfolioDisplay',
            providesTags: ['Portfolio'],
        }),
        portfolioInsert: builder.mutation({
            query: (formData) => ({
                url: 'portfolioInsert',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Portfolio'],
        }),
        portfolioUpdate: builder.mutation({
            query: ({ id, formData }) => ({
                url: `portfolio/${id}`,
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['Portfolio'],
        }),
        portfolioDelete: builder.mutation({
            query: (id) => ({
                url: `portfolio/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Portfolio'],
        }),
    }),
})

export const {
    usePortfolioDisplayQuery,
    usePortfolioInsertMutation,
    usePortfolioUpdateMutation,
    usePortfolioDeleteMutation,
} = portfolioApi
