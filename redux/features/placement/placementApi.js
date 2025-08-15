import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const placementApi = createApi({
  reducerPath: 'placementApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
  }),
  tagTypes: ['placement'],
  endpoints: (builder) => ({
    placementDisplay: builder.query({
      query: () => 'placementDisplay',
      providesTags: ['placement'],
    }),
    placementInsert: builder.mutation({
      query: (formData) => ({
        url: 'placementInsert',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['placement'],
    }),
    placementUpdate: builder.mutation({
      query: ({ id, formData }) => ({
        url: `placement/${id}`,
        method: 'PUT', // backend is using POST for update
        body: formData,
      }),
      invalidatesTags: ['placement'],
    }),
    placementDelete: builder.mutation({
      query: (id) => ({
        url: `placement/${id}`,
        method: 'DELETE', // backend is using GET for delete
      }),
      invalidatesTags: ['placement'],
    }),
  }),
})

export const {
usePlacementDisplayQuery,
usePlacementInsertMutation,
usePlacementUpdateMutation,
usePlacementDeleteMutation
} = placementApi
