import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const eventApi = createApi({
    reducerPath: 'eventApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        credentials: 'include',
    }),
    tagTypes: ['event'],
    endpoints: (builder) => ({
        eventDisplay: builder.query({
            query: () => 'eventDisplay',
            providesTags: ['event'],
        }),
        eventInsert: builder.mutation({
            query: (formData) => ({
                url: 'eventInsert',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['event'],
        }),
        eventUpdate: builder.mutation({
            query: ({ id, formData }) => ({
                url: `event/${id}`,
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['event'],
        }),
        eventDelete: builder.mutation({
            query: (id) => ({
                url: `event/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['event'],
        }),
    }),
})

export const {
   useEventDisplayQuery,
   useEventInsertMutation,
   useEventUpdateMutation,
   useEventDeleteMutation
} = eventApi
