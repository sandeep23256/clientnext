import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const teamApi = createApi({
  reducerPath: 'teamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
  }),
  tagTypes: ['team'],
  endpoints: (builder) => ({
    teamDisplay: builder.query({
      query: () => 'teamDisplay',
      providesTags: ['team'],
    }),
    teamInsert: builder.mutation({
      query: (formData) => ({
        url: 'teamInsert',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['team'],
    }),
    teamUpdate: builder.mutation({
      query: ({ id, formData }) => ({
        url: `team/${id}`,
        method: 'PUT', // backend is using POST for update
        body: formData,
      }),
      invalidatesTags: ['team'],
    }),
    teamDelete: builder.mutation({
      query: (id) => ({
        url: `team/${id}`,
        method: 'DELETE', // backend is using GET for delete
      }),
      invalidatesTags: ['team'],
    }),
  }),
})

export const {
  useTeamDisplayQuery,
  useTeamInsertMutation,
  useTeamUpdateMutation,
  useTeamDeleteMutation,
} = teamApi
