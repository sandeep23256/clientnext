import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ['contact'],
  endpoints: (builder) => ({
    contactDisplay: builder.query({
      query: () => 'contactDisplay',
      providesTags: ['contact'],
    }),
    contactInsert: builder.mutation({
      query: (formData) => ({
        url: 'contactInsert',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['contact'],
    }),
    contactView: builder.query({
      query: (id) => `contactView/${id}`,
      providesTags: ['contact'],
    }),
    contactDelete: builder.mutation({
      query: (id) => ({
        url: `contactDelete/${id}`,
        method: 'GET', // use GET if your backend uses GET to delete
      }),
      invalidatesTags: ['contact'],
    }),
  }),
})

export const {
  useContactDisplayQuery,
  useContactInsertMutation,
  useContactViewQuery,
  useContactDeleteMutation,
} = contactApi
